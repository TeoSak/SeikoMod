import React from 'react'
import { useState } from 'react';
import { faq } from '../../assets/assets';

export const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);


    return (
        <div className='py-10 max-w-xl mx-auto flex flex-col items-center justify-center px-4 mb-8 md:px-0'>
            <h4 className='text-center font-semibold text-blue-400'>FAQ</h4>
            <h3 className='text-center pb-15'>Answers to your questions</h3>
            {faq.map((faq, index) => (
                <div className="border-b border-slate-200 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                    <div className="flex items-center justify-between">
                        <h4 className="text-base font-medium">
                            {faq.question}
                        </h4>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                            <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                        {faq.answer}
                    </p>
                </div>
            ))}
        </div>
    )
}
