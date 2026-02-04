import React, { useEffect } from 'react'
import { ProductCard } from '../../components/ProductCard'
import { dummyProducts } from '../../assets/assets'
import { useState } from 'react'

export const Shop = () => {
    const [sortOption, setSortOption] = useState('relevance');
    const [sortedProducts, setSortedProducts] = useState([]);
    useEffect(() => {
        if (sortOption === 'newest') {
            setSortedProducts([...dummyProducts].sort((a, b) => b.id - a.id));
        } else if (sortOption === 'price-low-high') {
            setSortedProducts([...dummyProducts].sort((a, b) => a.price - b.price));
        } else if (sortOption === 'price-high-low') {
            setSortedProducts([...dummyProducts].sort((a, b) => b.price - a.price));
        } else {
            setSortedProducts(dummyProducts);
        }
    }, [sortOption]);

    return (
        <div className='flex flex-col justify-center items-center'>
            <h4 className='text-center text-5xl mt-8'>Seiko Mod</h4>
            <p className='text-gray-600 py-4 text-center'>Discover our collection of custom Seiko watches.</p>
            <div className='mt-8 px-4 lg:px-50 flex border-t border-b border-gray-300 py-1 w-full justify-start items-center'>
                <h5>SORT BY</h5>
                <select className='ml-4 border-gray-300 rounded-md p-2 cursor-pointer' value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                </select>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-1 px-8 lg:px-50 justify-items-center py-12">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className='px-4 lg:px-50 py-10'>
                <hr className='text-gray-300' />
                <h5 className='text-2xl font-semibold py-4'>What is a Seiko Mod?</h5>
                <p className='text-gray-600 py-2'>A modified Seiko watch, commonly referred to as a "Seiko Mod," refers to an original Seiko watch that has been <span className='font-semibold'>customized and modified</span> to cater to the preferences and specific needs of watch enthusiasts. These modifications can be aesthetic, functional, or both.</p>
                <p className='text-gray-600 py-2'>Aesthetic modifications can involve changes to the dial, case, hands, bezel, bracelet, and more. All parts of the watch can be altered. These modifications allow for the creation of a unique and distinct watch that aligns with personal tastes.</p>
                <p className='text-gray-600 py-2'>Functional modifications may include upgrading the movement, enhancing water resistance, or adding complications such as <span className='font-semibold'>date displays or chronographs</span>. These changes can improve the watch's performance and usability.</p>
            </div>
        </div>
    )
}
