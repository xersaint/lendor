import CartProduct from "./CartProduct"

type Order = {
  _id?: string,
  userEmail: string,
  name: string,
  phone: string,
  streetAddress: string,
  city: string,
  state: string,
  country: string,
  postalCode: string,
  cartProducts: CartProduct[],
  paid: boolean,
  createdAt: string,
  loanAmount: number,
  loanTerm?: number,
  loanPurpose: string,
  employmentStatus: string,
  annualIncome: number,
  loanStatus: string,
}

export default Order;
