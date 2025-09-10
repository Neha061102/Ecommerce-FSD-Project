import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Forever is your trusted fashion destination for men, women, and kids. We bring you the latest trends, timeless classics, and everyday essentials—all crafted with comfort, quality, and affordability in mind. Whether you’re shopping for yourself or your family, Forever makes it easy to stay stylish at every age.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
             <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-123-456-7809</li>
                    <li>contact@forever.com</li>
                </ul>
            </div>

        </div>

            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reversed.</p>
            </div>

    </div>
  )
}

export default Footer