'use client'
import React, { useEffect, useState } from 'react'
import MenuItem from '@/types/MenuItem'
import HomeMenuItemCard from './HomeMenuItemCard'
import SectionHeader from './SectionHeader'
import { SectionProps } from '@/types/SectionProps'

const HomeMenu = ({ className }: SectionProps) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  useEffect(() => {
    fetch("/api/menu-items")
      .then(res => res.json())
      .then(menuItems => setMenuItems(menuItems.slice(0,6)))
  }, [menuItems])

  return (
    <section className={className}>
      <SectionHeader
        header={'Secure Loans'}
        description={'From classic manual loan application processes to innovative creations, our service promises a delightful symphony of satifaction that will earn your trust.'}
      />
      <div className='grid md:grid-cols-3 md:gap-0 grid-cols-1 gap-4'>
        {menuItems && menuItems.map((menuItem, index) => (
          <HomeMenuItemCard key={menuItem._id} menuItem={menuItem} index={index} />
        ))}
      </div>
    </section>
  )
}

export default HomeMenu