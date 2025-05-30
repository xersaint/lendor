import { Button, Image, Link } from '@nextui-org/react'
import SlideBackground from './SlideBackground'
import { SectionProps } from '@/types/SectionProps'

const HomeSlider = ({ className }: SectionProps) => {
  return (
    <section className={className}>
      <div data-hs-carousel='{"loadingClasses": "opacity-0", "isAutoPlay": true}' className="relative h-[850px] z-0">
        <div className="hs-carousel relative overflow-hidden w-full h-full">
          <div className="hs-carousel-body w-full absolute top-0 bottom-0 start-0 flex flex-nowrap duration-700 ease-in-out delay-200 opacity-0">

            {/*First Slide*/}
            <SlideBackground bgImage={'/assets/slider_bg_1.jpg'}>
              <div className="w-full flex flex-col justify-center text-center h-full absolute z-10">
                <span className="font-nothingYouCouldDo text-primary text-[40px] mb-4">Welcome</span>
                <h1 className="mb-8 text-[40px]">Apply for a Loan in Minutes <span className='block'>Loan Now</span></h1>
                <h3 className="mb-16">No long lines. No paperwork. Submit your loan request anytime, anywhere. <span className='block'> — fast, simple, and secure.</span></h3>
                <p>
                  <Button as={Link} href='/loan-application' color='primary' radius='none' size='lg' className='bg-primary-200 py-4 px-6 text-light'>Loan Now</Button>
                  {/* <Button as={Link} href='/menu' radius='none' size='lg' className='bg-transparent border-2 py-4 px-6 ml-2'>View Menu</Button> */}
                </p>
              </div>
            </SlideBackground>

            {/*Second Slide*/}
            <SlideBackground bgImage={'/assets/slider_bg_2.jpg'}>
              <div className="w-full flex flex-row gap-6 justify-center items-center h-full absolute z-10">
                <div className='w-1/4'>
                  <Image src="/assets/slider_pizza_1.png" alt=""/>
                </div>
                <div className='max-w-xl ml-6'>
                  <span className="font-nothingYouCouldDo text-primary text-[40px] mb-4">Fast</span>
                  <h1 className="mb-8 text-[40px]">Admin Control & Transparency</h1>
                  <h3 className="mb-16">Admins can easily track, approve, or reject loan applications with complete visibility and control.</h3>
                  <p>
                    <Button as={Link} href='/loan-application' color='primary' radius='none' size='lg' className='bg-primary-200 py-4 px-6 text-light'>Loan Now!</Button>
                    {/* <Button as={Link} href='/menu' radius='none' size='lg' className='bg-transparent border-2 py-4 px-6 ml-2'>View Menu</Button> */}
                  </p>
                </div>
              </div>
            </SlideBackground>

            {/*Third Slide*/}
            <SlideBackground bgImage={'/assets/slider_bg_2.jpg'}>
              <div className="w-full flex flex-row gap-6 justify-center items-center h-full absolute z-10">
                <div className='max-w-xl text-end mr-6'>
                  <span className="font-nothingYouCouldDo text-primary text-[40px] mb-4">Secure</span>
                  <h1 className="mb-8 text-[40px]">Easy Loan Applications</h1>
                  <h3 className="mb-16">No long lines. No paperwork. Submit your loan request anytime, anywhere — fast, simple, and secure.</h3>
                  <p>
                    <Button as={Link} href='/loan-application' color='primary' radius='none' size='lg' className='bg-primary-200 py-4 px-6 text-light'>Loan Now!</Button>
                    {/* <Button as={Link} href='/menu' radius='none' size='lg' className='bg-transparent border-2 py-4 px-6 ml-2'>View Menu</Button> */}
                  </p>
                </div>
                <div className='w-1/4'>
                  <Image src="/assets/slider_pizza_2.png" alt=""/>
                </div>
              </div>
            </SlideBackground>
          </div>
        </div>

        {/*Indicator buttons*/}
        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-3">
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
        </div>
      </div>
    </section>
  )
}

export default HomeSlider