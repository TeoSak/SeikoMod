import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { ProductDetails } from '../../components/ProductDetails'
import { dummyProducts, faqs } from '../../assets/assets'
import { Plus, Minus } from 'lucide-react'
import { Testimonials } from '../../components/Testimonials'

export const Item = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { id } = useParams()
    const product = dummyProducts.find((prod) => prod.id === parseInt(id))

    return (
        <>
            <div className='md:px-60 md:py-10'>
                <ProductDetails product={product} />
                <div className='grid lg:grid-cols-2 p-4'>
                    <div></div>
                    <div>
                        {faqs.map((faq, index) => (
                            <div key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)} className="border-b border-slate-200 py-4 cursor-pointer">
                                <div className='flex justify-between items-center'>
                                    <h5 className="text-base font-semibold">{faq.question}</h5>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                                <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Testimonials />
        </>
    )
}
