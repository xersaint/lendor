'use client'
import { useProfile } from '@/components/hooks/useProfile';
import UserTabs from '@/components/layout/UserTabs';
import UserProfile from '@/types/UserProfile';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast';
import Loader from '@/components/common/Loader';
import ApplicationForm from '@/components/common/form/ApplicationForm';
import Order from '@/types/Order';
import { useRouter } from "next/navigation";


const LoanApplication = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data: profileData, loading } = useProfile();
  const [ orders, setOrders ] = useState<Order[]>([]);

  if (status === 'unauthenticated') {
    redirect('/login');
  }

  if (status === 'loading' || loading && session) {
    return <Loader className={""}/>
  }

  async function handleProfileUpdate(event: FormEvent<HTMLFormElement>, data: UserProfile | Order) {
    event.preventDefault();

    console.log(JSON.stringify(data));

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        const data = await response.json();
        resolve(response);
        setOrders(data);
        router.push('/applications/' + data._id);
      } else {
        console.log("Error saving profile", response);
        reject();
      }
    });

    toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Successfully submitted application!",
      error: "Error saving profile"
    });
  }

  return (
    <section className="pt-10 pb-20">
      {profileData &&
        <>
          {/* <UserTabs admin={profileData.isAdmin} className={profileData.isAdmin ? "max-w-6xl mx-auto" : "max-w-2xl mx-auto"} /> */}
          <div className="mt-16 max-w-2xl mx-auto">
            <ApplicationForm user={profileData} orders={orders} onSave={(event, data) => handleProfileUpdate(event, data)} />
          </div>
        </>
      }
    </section>
  )
}

export default LoanApplication