'use client'
import { DietFoodIcon } from '@/icons/DietFoodIcon'
import { PizzaIcon } from '@/icons/PizzaIcon'
import { ScooterIcon } from '@/icons/ScooterIcon'
import { SectionProps } from '@/types/SectionProps'
import { motion } from "framer-motion"

const ServicesSection = ({className}:SectionProps) => {
  return (
    <section className={`bg-[url('/assets/bg_wallpaper.png')] bg-repeat text-dark ${className}`}>
      <div className='container py-12'>
        <div className="container max-w-4xl text-center mb-10">
          <h1 className="font-semibold mb-4">Our Services</h1>
          <p>
            Lendora offers streamlined, secure, and smart solutions for loan applicants and administrators—making loan processing faster, easier, and more transparent.
          </p>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='flex flex-col gap-3 text-center p-6'>
            <div className="flex items-center text-center justify-center mb-5">
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 225, transition: { duration: 1, ease: 'easeInOut' } }}
                className='w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative '>
              </motion.span>
              <span className='absolute' ><DietFoodIcon className={'w-16'} /></span>
            </div>

            <h3 className='uppercase mb-4'>Easy Loan Applications</h3>
            <div>
              Submit and manage your loan applications effortlessly with our user-friendly interface and step-by-step guidance.
            </div>
          </div>
          <div className='flex flex-col gap-3 text-center p-6'>
            <div className="flex items-center text-center justify-center mb-5">
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 225, transition: { duration: 1, ease: 'easeInOut' } }}
                className='w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative'>
              </motion.span>
              <span className='absolute'><ScooterIcon className={'w-16'} /></span>
            </div>
            <h3 className='uppercase mb-4'>Real-Time Updates</h3>
            <div>Experience the unbeatable convenience of Fast Delivery as we bring the piping hot perfection of our pizzas straight to your doorstep.</div>
          </div>
          <div className='flex flex-col gap-3 text-center p-6'>
            <div className="flex items-center text-center justify-center mb-5">
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 225, transition: { duration: 1, ease: 'easeInOut' } }}
                className='w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative'>
              </motion.span>
              <span className='absolute'><PizzaIcon className={'w-16'} /></span>
            </div>
            <h3 className='uppercase mb-4'>Admin Control & Transparency</h3>
            <div>
              Delight your taste buds with the authenticity of our Original Recipe pizzas,
              where every slice is a celebration of timeless flavors and culinary expertise.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection