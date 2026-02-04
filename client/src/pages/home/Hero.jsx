import React from 'react';
import { assets } from '../../assets/assets';
import { ChevronRight } from 'lucide-react';
import { Button } from '../../components/Button';

export const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${assets.bgDesktop})` }}
            className='relative w-full h-screen pb-30 flex justify-center items-end bg-center bg-no-repeat bg-cover'>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className='relative z-10 flex flex-col justify-center items center'>
                <h2 className='text-white text-center text-5xl font-semibold'>What will be your new watch?</h2>
                <p className='text-white text-center font-medium py-4'>Dive into the world of custom Seiko watches.</p>
                <div className='flex flex-col justify-center items-center'>
                    <a href="/history" className='text-white font-medium flex items-center justify-center cursor-pointer'>
                        Our History <ChevronRight className='text-blue-400' size={25} />
                    </a>
                    <div className='grid grid-cols-2 gap-8 py-8'>
                        <Button><a href="/shop">Shop</a></Button>
                        <Button><a href="/configurator">Configurator</a></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
