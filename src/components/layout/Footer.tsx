import { FaceBookIcon } from "@/icons/FaceBookIcon"
import { InstaIcon } from "@/icons/InstaIcon"
import { LocationIcon } from "@/icons/LocationIcon"
import { MailIcon } from "@/icons/MailIcon"
import { PhoneIcon } from "@/icons/PhoneIcon"
import { TwitterIcon } from "@/icons/TwitterIcon"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white pt-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-6 px-10 lg:px-48">
        <div className="col-span-full lg:col-span-1 lg:block">
          <Link href="/" className='text-black text-2xl font-josefin'>Lendora</Link>
          <div className="mt-6 flex gap-6">
            <TwitterIcon className={"w-6 text-primary-200"} />
            <FaceBookIcon className={"w-6 text-primary-200"} />
            <InstaIcon className={"w-6 text-primary-200"}/>
          </div>
        </div>
        
        <div>
          <h4 className="uppercase text-primary-200">About Us</h4>
          <p className="mt-6 text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt provident a officiis ipsum aspernatur unde possimus quas. Fugit vitae qui asperiores cum ipsum temporibus? Quos quam aliquam, laudantium delectus omnis animi ipsa vero fugiat id cumque doloribus alias eum molestiae repellat numquam nemo neque, dolore hic provident distinctio obcaecati. Voluptates delectus tempora sapiente veniam quo magni maiores at repudiandae expedita.
          </p>
        </div>

        <div>
          <h4 className="uppercase text-primary-200">Our Mission:</h4>
          <p className="mt-2 text-black">To make loan management fast, fair, and accessible for everyone — one application at a time.</p>
        </div>

        <div>
          <h4 className="uppercase text-primary-200">Our Values</h4>
          <div className="mt-6 grid space-y-2 text-black">
            <p><a className="inline-flex gap-x-2 hover:text-black" href="/">Simplicity - Clean design, easy navigation, no clutter.</a></p>
            <p><a className="inline-flex gap-x-2 hover:text-black" href="/">Transparency - Clear status updates and reliable communication.</a></p>
            <p><a className="inline-flex gap-x-2 hover:text-black" href="/">Security - Your data is protected with modern standards.</a></p>
            <p><a className="inline-flex gap-x-2 hover:text-black" href="/">Support - We are always listening and constantly improving.</a></p>
          </div>
        </div>

        <div>
          <h4 className="uppercase text-primary-200">Have a question?</h4>
          <div className="mt-6 text-black">
            <ul className="space-y-2">
              <li className="inline-flex space-x-4">
                <span><LocationIcon className={"w-6"} /></span>
                <span>211 N. Bacalso Avenue 6000 Cebu City Cebu 6000, Philipines</span>
              </li>
              <li className="inline-flex space-x-4">
                <span><PhoneIcon className={"w-6"} /></span>
                <span>+44 168 4892 229</span>
              </li>
              <li className="inline-flex space-x-4">
                <span><MailIcon className={"w-6"} /></span>
                <span>info@lendora.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-5 border-t border-black text-center">
      <p className="mt-4 text-black">Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer