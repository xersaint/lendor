import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { User } from "@/app/models/User";
import { Order } from "@/app/models/Order";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/libs/authOptions";
import { isAdmin } from "@/libs/isAdmin";

export async function GET(req: NextRequest) {
  mongoose.connect(process.env.MONGODB_URI!);

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const admin = await isAdmin();

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");
  if (_id) {
    return NextResponse.json(await Order.findById(_id));
  }
  if (admin) {
    return NextResponse.json(await Order.find());
  } else {
    return NextResponse.json(await Order.find({ userEmail: userEmail }));
  }
}

export async function POST(req: NextRequest) {
  mongoose.connect(process.env.MONGODB_URI!);

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const admin = await isAdmin();

  const body = await req.json();
  return NextResponse.json(await Order.create(body));
}

export async function PATCH(req: NextRequest) {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const data = await req.json();
    if (data._id) { // update other user
      const updateApplication = await Order.findByIdAndUpdate({ _id: data._id }, data);
      return NextResponse.json(updateApplication)
    } 
  } catch (err) {
    return NextResponse.json(err);
  }
}