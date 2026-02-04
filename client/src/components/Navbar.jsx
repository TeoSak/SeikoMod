import React from 'react';
import { useState } from 'react';
import { UserRound, ShoppingBag } from 'lucide-react';

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-black text-white relative transition-all">
            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>
            <a href="/">
                <h1 className="text-2xl font-bold">SeikoMods.gr</h1>
            </a>
            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <a href="/configurator">Configurator</a>
                <a href="/shop">Shop</a>
                <a href="/history">History</a>
                <a href="/contact-us">Contact</a>
            </div>
            <div className='flex gap-6'>
                <a href='/login'><UserRound /></a>
                <a href='/cart'><ShoppingBag /></a>
            </div>
            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-gray-900 shadow-md py-8 flex-col items-start gap-4 px-5 text-sm md:hidden`}>
                <a href="/configurator" className="block">Configurator</a>
                <a href="/shop" className="block">Shop</a>
                <a href="/history" className="block">History</a>
                <a href="/contact-us" className="block">Contact</a>
            </div>
        </nav>
    )
}
