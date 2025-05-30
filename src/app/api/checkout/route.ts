import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { Order } from "@/app/models/Order";
import { MenuItem } from "@/app/models/MenuItem";
import MenuItemAddOn from "@/types/MenuItemAddOn";
import {client, paypal} from "@/libs/paypal";
import { authOptions } from "@/libs/authOptions";

export async function POST(req: NextRequest) {
  await mongoose.connect(process.env.MONGODB_URI!);
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;

  const { cartProducts, address } = await req.json();

  const order = await Order.create({
    userEmail,
    ...address,
    cartProducts,
    paid: false,
  });

  let total = 0;
  let itemList: any[] = [];

  for (const cartProduct of cartProducts) {
    const menuItem = await MenuItem.findById(cartProduct.menuItem._id);
    let productPrice = menuItem.basePrice;

    if (cartProduct.selectedSize) {
      const size = menuItem.sizes.find(
        (size: MenuItemAddOn) =>
          size._id?.toString() === cartProduct.selectedSize._id.toString()
      );
      productPrice += size.price;
    }

    if (cartProduct.selectedExtras?.length > 0) {
      for (const selectedExtra of cartProduct.selectedExtras) {
        const extra = menuItem.extraIngredientsPrices.find(
          (e: MenuItemAddOn) => e._id?.toString() === selectedExtra._id.toString()
        );
        productPrice += extra.price;
      }
    }

    itemList.push({
      name: menuItem.name,
      unit_amount: {
        currency_code: "PHP",
        value: productPrice.toFixed(2),
      },
      quantity: "1",
    });

    total += productPrice;
  }

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "PHP",
          value: total.toFixed(2),
          breakdown: {
            item_total: {
              currency_code: "PHP",
              value: total.toFixed(2),
            },
          },
        },
        items: itemList,
        custom_id: order._id.toString(),
      },
    ],
    application_context: {
      return_url: `${process.env.NEXTAUTH_URL}/orders/${order._id}?clear-cart=1`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cart?canceled=1`,
    },
  });

  const paypalOrder = await client.execute(request);
  console.log(paypalOrder);

  const approvalUrl = paypalOrder.result.links.find(
    (link: any) => link.rel === "approve"
  )?.href;
  console.log("Approval URL:", approvalUrl);

  return NextResponse.json(approvalUrl);
}
