import React from 'react'
import '../index.css'

export const DiscountBanner = () => {
    return (
        <div className="w-full overflow-hidden py-2.5 font-semibold text-sm">
            <p className="marquee">
                Special Deal: Free Shipping on Orders Above $50! | 20% OFF on First Purchase
            </p>
        </div>
    )
}
