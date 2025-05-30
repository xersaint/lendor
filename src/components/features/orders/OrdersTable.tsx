import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Chip } from "@nextui-org/react"
import Link from "next/link";
import Order from "@/types/Order";
import { EyeFilledIcon } from "@/icons/EyeFilledIcon";
import { getReadableDateTime } from "@/libs/datetime";
import { Span } from "next/dist/trace";

interface OrdersTableProps {
  orders: Order[];
  isAdmin: boolean;
}

const OrdersTable = ({ orders, isAdmin }: OrdersTableProps) => {
  return (
    <>
      <Table aria-label="Orders Table" isStriped
      topContent={'Total Applications: ' + orders.length}
      classNames={{ th: "text-md text-center", td: "text-md text-center text-gray-300", table: 'gap-4 bg-cyan-950'}}>
      <TableHeader>
        <TableColumn>Application Date</TableColumn>
          <TableColumn>Loan Number</TableColumn>
          <TableColumn className={isAdmin ? "" : "hidden"}>Customer Email</TableColumn>
          {/* <TableColumn>Payment Status</TableColumn> */}
          <TableColumn>Application Status</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      {orders.length > 0 ? (
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell><p className="whitespace-nowrap">{getReadableDateTime(order.createdAt)}</p></TableCell>
              <TableCell>{order._id}</TableCell>
              <TableCell className={isAdmin ? "" : "hidden"}>{order.userEmail}</TableCell>
              {/* <TableCell>
                {order.paid
                  ? <Chip className="capitalize" color='success' size="md" variant="flat">Paid</Chip>

                  : <Chip className="capitalize" color='danger' size="md" variant="flat">{ order.loanStatus === 'Pending' ? 'For Approval' :  order.loanStatus === 'Approved' ? 'Unpaid' : order.loanStatus}</Chip>}
              </TableCell> */}

              <TableCell>
                <Chip 
                  className="capitalize"
                  color={order.loanStatus === 'Pending' ? 'warning' :  order.loanStatus === 'Approved' ? 'success' : 'danger'}
                  size="md"
                  variant="flat">
                  {order.loanStatus}
                </Chip>
              </TableCell>


              <TableCell>
                <div className="relative flex items-center justify-center">
                  <Tooltip content="View Loan Application" placement="top">
                    <Link className="text-lg cursor-pointer active:opacity-50" href={`/applications/${order._id}`}>
                      <EyeFilledIcon className={"w-6"} />
                    </Link>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      ) : (
        <TableBody emptyContent={isAdmin
          ? "No Applications to display"
          : <p>You haven&apos;t placed any Applications. <Link href={"/loan-application"} className="text-primary">Apply for Loan</Link></p>
        }>
          {[]}
        </TableBody>
      )}

    </Table>
    
      { isAdmin
            ? "No Applications to display"
            : <p className="text-xl text-center mt-4">Need additional loan? <Link href={"/loan-application"} className="text-primary text-2xl">Apply Now!</Link></p>
      }
    </>
  )
}

export default OrdersTable