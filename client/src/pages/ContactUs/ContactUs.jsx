import React from 'react'
import { Button } from '../../components/Button'
import { Mail, MapPin } from 'lucide-react';

export const ContactUs = () => {
    return (
        <div className='py-8'>
            <form className="flex flex-col items-center text-sm">
                <p className="text-lg text-blue-400 font-medium pb-2">Contact Us</p>
                <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
                <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-[700px] px-4">
                    <div className="w-full">
                        <label className="text-black/70" htmlFor="name">Your Name</label>
                        <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                    </div>
                    <div className="w-full">
                        <label className="text-black/70" htmlFor="name">Your Email</label>
                        <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                    </div>
                </div>
                <div className="my-6 px-4 w-full md:w-[700px]">
                    <label className="text-black/70" htmlFor="name">Message</label>
                    <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
                </div>
                <Button className="mt-6 px-8 py-4">Send Message</Button>
            </form>
            <hr className='text-gray-300 my-8 lg:mx-100' />
            <div className='lg:px-100 p-4 grid lg:grid-cols-2 gap-8'>
                <div className='flex justify-center items-center gap-2'>
                    <Mail />
                    <div>
                        <h5 className='font-semibold'>Email Us</h5>
                        <p className='text-gray-600'>contact@seikomods.gr</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <MapPin />
                    <h5 className='font-semibold'>SeikoMods.gr, Athens Greece</h5>
                </div>
            </div>
        </div>
    )
}
