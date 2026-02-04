import React from 'react'
import { Button } from '../../components/Button'
import { assets } from '../../assets/assets'

export const LearnServices = () => {
    return (
        <div className='py-20 w-full px-4 flex flex-col md:flex-row justify-center items-center'>
            <div className='p-4 md:p-12 order-2 md:order-1'>
                <h3>Ask Us About Our Services</h3>
                <p className='text-gray-600 py-8'>Discover how our custom Seiko watch modifications can transform your timepiece <br /> into a unique masterpiece.</p>
                <Button><a href="/contact-us">Contact Us</a></Button>
            </div>
            <div className='order-1 md:order-2'>
                <img src={assets.contactUsWatch} alt="Contact Us Watch" className='w-80 h-100' />
            </div>
        </div>
    )
}
