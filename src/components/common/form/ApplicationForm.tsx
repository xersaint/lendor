import React, { FormEvent, useState } from 'react'
import ImageUploader from '../ImageUploader'
import { Avatar, Button, Checkbox } from '@nextui-org/react'
import { PencilIcon } from '@/icons/PencilIcon'
import UserProfile from '@/types/UserProfile'
import { useProfile } from '../../hooks/useProfile'
import AddressInputs from './AddressInputs'
import Order from '@/types/Order'

interface ApplicationFormProps {
  user: UserProfile | null,
  orders: Order[],
  onSave: (event: FormEvent<HTMLFormElement>, data: UserProfile | Order) => void
}

const ApplicationForm = ({ user, orders, onSave }: ApplicationFormProps) => {
  const [userName, setUserName] = useState(user?.name || '');
  const [userImage, setUserImage] = useState(user?.image || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || '');
  const [city, setCity] = useState(user?.city || '');
  const [state, setState] = useState(user?.state || '');
  const [postalCode, setPostalCode] = useState(user?.postalCode || '');
  const [country, setCountry] = useState(user?.country || '');
  const [isAdmin, setIsAdmin] = useState(user?.isAdmin || false);
  const [loanTerm, setLoanTerm] = useState(12);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanPurpose, setloanPurpose] = useState('');
  const [employmentStatus, setemploymentStatus] = useState('');
  const [annualIncome, setannualIncome] = useState(0);
  const [loanStatus, setloanStatus] = useState(0);

  const { data: loggedInUserData } = useProfile();

  function handleAddressChange(propName: string, value: string): void {
    if (propName === 'phone') setPhone(value);
    if (propName === 'streetAddress') setStreetAddress(value);
    if (propName === 'city') setCity(value);
    if (propName === 'state') setState(value);
    if (propName === 'country') setCountry(value);
    if (propName === 'postalCode') setPostalCode(value);
  }

  return (
    
    <div className='grid grid-cols-10 gap-4'>
   
      <form className='col-span-6' onSubmit={(e) => onSave(e, { 
        name: userName,
        image: userImage,
        userEmail: user?.email,
        phone,
        loanTerm,
        streetAddress,
        postalCode,
        city,
        state,
        country,
        isAdmin,
        loanAmount,
        loanPurpose,
        employmentStatus,
        annualIncome,
      })}>
        <label className="text-light"> Full name</label>
        <input type="text" placeholder='Full name' value={user?.name ?? ''} onChange={e => setUserName(e.target.value)} className='input disabled:bg-gray-100' readOnly/>
        <label className="text-light"> Email</label>
        <input type="email" placeholder="Email" value={user?.email ?? ''} disabled className='input disabled:bg-gray-100' />
        <AddressInputs
          addressProps={{ phone, streetAddress, city, state, country, postalCode }}
          setAddressProps={(propName: string, value: string) => handleAddressChange(propName, value)} disabled={false} />
        <Button type='submit' className='mt-2 font-semibold hover:text-light hover:bg-primary-200' fullWidth >Save All Changes</Button>
      </form>
      
      <div className='col-span-4'>
        <label className="text-light">Loan Amount</label>
        <input className='input' type="number" step={1000} placeholder="1000" onChange={(e: any) => setLoanAmount(e.target.value)} value={loanAmount} required/>

        <label className="text-light"> Loan Purpose</label>
        <input className='input' type="text" placeholder="Tuition" onChange={(e: any) => setloanPurpose(e.target.value)} value={loanPurpose} required/>

        <label htmlFor='loanTerm' className="text-light"> Loan Term</label>
        <select className='input' id='loanTerm' onChange={(e: any) => setLoanTerm(e.target.value)} value={loanTerm} required>
          <option value="12">12 Months</option>
          <option value="24">24 Months</option>
          <option value="36">36 Months</option>
        </select>

        
        <label className="text-light"> Employment Status</label>
        <input className='input' type="text" placeholder="Retired" onChange={(e: any) => setemploymentStatus(e.target.value)} value={employmentStatus} required/>

        <label className="text-light"> Annual Income</label>
        <input className='input' type="number" placeholder="100000" onChange={(e: any) => setannualIncome(e.target.value)} value={annualIncome} required/>
      </div>
    </div>
  )
}

export default ApplicationForm