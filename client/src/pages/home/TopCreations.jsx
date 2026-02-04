import React from 'react'
import { ProductCard } from '../../components/ProductCard'
import { dummyProducts } from '../../assets/assets'
import { Button } from '../../components/Button'

export const TopCreations = () => {
    return (
        <div className='w-full xl:h-screen pb-8'>
            <h3 className='text-center py-4'>Our Top Creations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-1 px-8 md:px-25 justify-items-center py-8">
                {dummyProducts.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="w-full flex items-center justify-center mt-8">
                <Button><a href="/shop">View More</a></Button>
            </div>
        </div>
    )
}
