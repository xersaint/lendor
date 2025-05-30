import Order from "@/types/Order";

interface ApplicationSummaryProps {
  orderId?: string;
  subtotal: number,
  deviveryFee: number,
  discount: number,
  paid: boolean,
  order: Order
}

const ApplicationSummary = ({ orderId, subtotal, deviveryFee, discount, paid, order }: ApplicationSummaryProps) => {
  const processingFee = 100;
  const disbursementAmount = (order?.loanAmount * .02);
  const disbursementAmountFormatted = (order?.loanAmount - processingFee - disbursementAmount).toFixed(2);

  const total = subtotal + deviveryFee + discount;

  return (
    <>
      <div className='grid grid-cols-8 pt-2'>
        <div className='pl-4 col-span-7 flex justify-between font-semibold'>
          <span>Loan Amount</span>
          <span>Php {order?.loanAmount.toFixed(2)}</span>
        </div>
      </div>
      <div className='grid grid-cols-8 pt-1'>
        <div className='pl-4 col-span-7 flex justify-between text-light-400'>
          <span>Payable in</span>
          <span>{order?.loanTerm ? order?.loanTerm : 12} Month(s)</span>
        </div>
      </div>
      <div className='grid grid-cols-8 pt-1 pb-2 border-b border-dashed'>
        <div className='pl-4 col-span-7 flex justify-between text-light-400'>
          <span>Processing Fee</span>
          <span>Php -{processingFee.toFixed(2)}</span>
        </div>
      </div>
      <div className='grid grid-cols-8 pt-2'>
        <div className='pl-4 col-span-7 flex justify-between font-semibold'>
          <span>Interest</span>
          <span>Php -{disbursementAmount.toFixed(2)}</span>
        </div>
      </div>
      {orderId &&
        <div className='grid grid-cols-8 pt-1'>
          <div className='pl-4 col-span-7 flex justify-between font-semibold'>
            <span>Disbursement Amount</span>
            <span>Php {disbursementAmountFormatted}</span>
          </div>
        </div>
      }
    </>
  )
}

export default ApplicationSummary