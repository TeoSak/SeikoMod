import React from 'react'
import { assets } from '../../assets/assets'

export const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 p-4 mt-6 md:p-25 gap-4'>
            <img src={assets.watchMaking} alt="Watch Making" />
            <div className='md:p-6 md:pe-12'>
                <h3 className='mb-4'>About Our Watchmaking</h3>
                <p className='mb-4 text-gray-700 leading-relaxed'>
                    At our company, we pride ourselves on the art of watchmaking. Each timepiece is crafted with precision and care, blending traditional techniques with modern innovation.
                </p>
                <p className='mb-4 text-gray-700 leading-relaxed'>
                    Our skilled artisans dedicate countless hours to ensure that every watch not only tells time but also tells a story. From the intricate movements to the elegant designs, our watches are a testament to our commitment to quality and craftsmanship.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                    Discover the timeless elegance and superior performance of our watches, designed to be cherished for generations.
                </p>
            </div>
        </div>
    )
}
