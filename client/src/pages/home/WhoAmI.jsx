import React from 'react'
import { assets } from '../../assets/assets'
import { Button } from '../../components/Button'

export const WhoAmI = () => {
    return (
        <div className='md:py-20 w-full px-4 flex flex-col lg:px-30 md:flex-row justify-center items-center'>
            <div className='p-4 md:p-12 lg:px-20 order-2 md:order-1'>
                <h4 className='font-semibold text-blue-400'>WHO AM I ?</h4>
                <h3>Find out more about the designer</h3>
                <p className='text-gray-600 text-base py-8'>My name is Tom and I am a passionate watch enthusiast who has dedicated my life to creating custom Seiko watches. <br /> With over a decade of experience in watchmaking, I specialize in transforming standard Seiko timepieces into unique, high-quality masterpieces.</p>
                <Button><a href="/history">History</a></Button>
            </div>
            <div className='order-1 md:order-2'>
                <img src={assets.whoami} alt="Contact Us Watch" className='w-150 h-100' />
            </div>
        </div>
    )
}
