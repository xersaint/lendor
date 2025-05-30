import { SectionProps } from '@/types/SectionProps'
import React from 'react'

const AboutSection = ({className}:SectionProps) => {
  return (
    <section id="about" className={className}>
      <div className='grid grid-cols-2'>
        <div className="bg-[url('/assets/about.jpg')] bg-center bg-no-repeat bg-cover"></div>
        <div className="p-24">
          <h1 className="mb-4">Welcome to <span className="text-primary-200 font-bold">Lendora</span></h1>
          <div className='text-gray-300'>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit minus necessitatibus iste deserunt ab vel minima tenetur nam possimus aspernatur animi, eius impedit! Quia eum sint commodi eius dolor nam quibusdam delectus laborum optio illum, eos hic architecto repellendus minus impedit eveniet dignissimos asperiores. Temporibus fuga aperiam possimus quos, quo nemo veniam debitis, ad iusto aliquid facere quas culpa, necessitatibus accusantium et! Velit ipsam dolores odio necessitatibus a nostrum officiis ipsum omnis, accusamus cupiditate quam quos voluptatibus aliquid illum doloribus odit quae dolorum nulla autem sed facere iure nobis. Culpa quis aliquid ducimus, voluptas debitis voluptatum repudiandae explicabo voluptates.
            </p>
            <p>
              Experience faster decisions with our streamlined admin dashboard that ensures your loan is reviewed without delays.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection