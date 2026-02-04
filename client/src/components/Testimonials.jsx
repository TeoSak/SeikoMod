import React from 'react'
import { testimonials } from '../assets/assets'
import { useState } from 'react'

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [active, setActive] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center p-6 md:p-14 w-full bg-gray-100 text-black">
            <h6 className="text-xl text-blue-400 font-semibold mb-8">TESTIMONY</h6>
            <h5 className='text-4xl text-center font-bold'>They talk about us</h5>
            <div className="flex flex-col items-center">
                <p className="text-center text-gray-600 py-4">{testimonials[currentIndex]}</p>
            </div>
            <div className="flex items-center gap-2 mt-8">
                <div onClick={() => (setCurrentIndex(0), setActive(0))} className={`${active === 0 ? 'bg-black' : 'bg-slate-400'} w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer`}></div>
                <div onClick={() => (setCurrentIndex(1), setActive(1))} className={`${active === 1 ? 'bg-black' : 'bg-slate-400'} w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer`}></div>
                <div onClick={() => (setCurrentIndex(2), setActive(2))} className={`${active === 2 ? 'bg-black' : 'bg-slate-400'} w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer`}></div>
            </div>
        </div>
    )
}
