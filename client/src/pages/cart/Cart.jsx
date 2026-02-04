import React from 'react'
import { TopCreations } from '../home/TopCreations'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCartCard } from '../../components/ProductCartCard.jsx'
import { useCart } from '../../context/CartContext.jsx'

export const Cart = () => {
    const { cartItems } = useCart();
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log(cartItems);
    return (
        <div className='flex flex-col justify-center p-2 md:px-50'>
            <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-8 mt-10'>
                <div className='w-full'>
                    <h5 className='text-4xl font-thin text-gray-500 py-4 px-2 mb-4 bg-gray-100 border border-gray-300 rounded'>SHOPPING CART</h5>
                    {cartItems.length === 0 ? (
                        <h6 className='text-md font-medium text-gray-100 bg-orange-400 py-3 px-2'>There are no items in your cart</h6>
                    ) : (
                        <>
                            {cartItems.map(item => (
                                <ProductCartCard key={`${item.id}-${item.option}`} product={item} />
                            ))}
                        </>
                    )}
                    <button className='bg-black text-white font-semibold py-4 px-6 rounded-full mt-4 hover:bg-gray-800 cursor-pointer'>
                        <Link to='/shop' className='flex gap-2 '>Continue Shopping<MoveRight /></Link>
                    </button>
                </div>
                <div className='bg-gray-100 p-4 w-full md:w-auto md:pe-50 border border-gray-300 rounded'>
                    <p className=''><span className='font-semibold pe-4'>{cartItems.length} ITEMS</span> ${totalPrice}</p>
                    <p className=''><span className='font-semibold pe-2'>SHIPPING</span> Free</p>
                    <p className='mt-4'><span className='font-semibold pe-4'>TOTAL</span> ${totalPrice}</p>
                    <button className='bg-gray-400 flex gap-2 text-white font-semibold py-2 px-4 rounded-full mt-4 hover:bg-gray-600 cursor-pointer mb-4'>
                        Checkout
                        <MoveRight />
                    </button>
                </div>
            </div>
            <div><TopCreations /></div>
        </div>
    )
}
