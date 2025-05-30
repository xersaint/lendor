'use client'
import AddressInputs from '@/components/common/form/AddressInputs'
import CartProduct from '@/components/features/cart/CartProduct'
import OrderSummary from '@/components/features/cart/OrderSummary'
import { CartContext, calCartProductPrice } from '@/util/ContextProvider'
import { TickIcon } from '@/icons/TickIcon'
import CartProductInfo from '@/types/CartProduct'
import Order from '@/types/Order'
import { BreadcrumbItem, Breadcrumbs, Button, Chip } from '@nextui-org/react'
import { useParams } from 'next/navigation'
import React, { FormEvent, useContext, useEffect, useState } from 'react'
import ApplicationSummary from '@/components/features/cart/ApplicationSummary'
import { useProfile } from "@/components/hooks/useProfile"
import UserProfile from '@/types/UserProfile'
import toast from 'react-hot-toast';
import { useRouter } from 'next/router'
import { redirect } from "next/navigation";

const OrderPage = () => {
  const { id } = useParams();
  const { clearCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);
  const [status, setStatus] = useState('Pending');
  const [order, setOrder] = useState<Order | null>(null);
  const { data: profileData, loading } = useProfile();

  useEffect(() => {

    if (id) {
      fetch(`/api/orders?_id=${id}`)
        .then(res => res.json())
        .then(data => { setOrder(data); })
    }

  }, [id])

  let subtotal = 0;

  async function handleApproval(event: FormEvent<HTMLFormElement>, key: number) {
    event.preventDefault();


    const handleLoanUpdate = async () => {
      try {
        // 1. Update the loan status
        const response = await fetch('/api/orders', {
          method: 'PATCH',
          body: JSON.stringify({
            loanStatus: key === 1 ? 'Approved' : 'Rejected',
            _id: id,
            isAdmin: profileData?.isAdmin,
          }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) throw new Error('Failed to update loan status');

        const data = await response.json();
        setStatus(data.loanStatus);

        // 2. Send email (optional — adjust endpoint as needed)
        const emailData = {
          amount: order!.loanAmount,
          term: order!.loanTerm,
          purpose: order!.loanPurpose,
          email: order!.userEmail, // Ensure this field exists in your order data
          name: order!.name, // Ensure this field exists in your order data
        }
        await fetch('/api/email-sender', {
          method: 'POST',
          body: JSON.stringify(emailData),
          headers: { 'Content-Type': 'application/json' },
        });

        

      } catch (error) {
        console.error('Error handling loan update or email sending:', error);
        // You may want to show a toast or error message here
      }
    };

    handleLoanUpdate()
      .finally(() => {
        // 3. Redirect after everything succeeds
        window.location.href = "/applications/" + id;
      });
  }

  return (
    <section className='pt-10 pb-20 max-w-6xl mx-auto'>
      {showMessage &&
        <div className='text-2xl font-semibold text-primary justify-center italic mb-6 flex gap-2 items-center'>
          <TickIcon className={'w-16'} />
          Order Submitted
        </div>
      }
      <Breadcrumbs size='lg'>
        <BreadcrumbItem href='/applications'>Applications</BreadcrumbItem>
        <BreadcrumbItem>ID {id}</BreadcrumbItem>
      </Breadcrumbs>
      <div>
        {order && (
          <div className='grid grid-cols-5 mt-8 gap-12'>
            <div className='col-span-5'>
              <h2 className='border-b-1 font-semibold py-3 text-primary'>Loan Application Details <Chip 
                  className="capitalize"
                  color={order.loanStatus === 'Pending' ? 'warning' :  order.loanStatus === 'Approved' ? 'success' : 'danger'}
                  size="md"
                  variant="solid">
                  {order.loanStatus}
                </Chip></h2>
              <ApplicationSummary orderId={order._id} subtotal={subtotal} deviveryFee={5} discount={0} paid={order.paid} order={order}/>
            </div>

            {
              profileData?.isAdmin && (
              <>
              <div className='col-span-2'>
              <h2 className='font-semibold py-3 text-primary'>Applicant Personal Info</h2>
              <div className='rounded-xl p-4 shadow-xl bg-gray-800'>
                <div>
                  <input type="text" name="name" placeholder="Name" className="input" id="" value={order.name} disabled/>
                  <AddressInputs
                    addressProps={order}
                    disabled={true} setAddressProps={function (propName: string, value: string): void { }} />
                </div>
              </div>
            </div>
                <div className='flex-row flex col-span-5 gap-4'>
                  <Button className='mb-4 p-7 bg-success' color="secondary" size="lg" fullWidth onClick={(event: any) => handleApproval(event, 1)} disabled={order.loanStatus !== 'Pending'}>
                    Approve
                  </Button>
                  <Button className='mb-4 p-7 bg-danger' color="secondary" size="lg" fullWidth onClick={(event: any) => handleApproval(event, 2)} disabled={order.loanStatus !== 'Pending'}>
                    Reject
                  </Button>
                </div></>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default OrderPage