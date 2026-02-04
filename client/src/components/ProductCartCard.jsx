import React from 'react'
import { useState } from 'react'
import { dummyProducts } from '../assets/assets'
import { Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

export const ProductCartCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { removeFromCart, updateQuantity } = useCart();

    return (
        <div className='bg-gray-100 p-4 my-2 border border-gray-300 rounded flex flex-col md:flex-row gap-4 justify-between items-start md:items-center'>
            <div>
                {product.option !== 'Oyster' ? (
                    <img src={product.image_jubilee} alt='product' className='w-24 h-24 object-cover' />
                ) : (
                    <img src={product.image_oyster} alt='product' className='w-24 h-24 object-cover' />
                )}
            </div>
            <div>
                <h5 className='font-medium text-gray-700'>{product.name}</h5>
                <p className='text-sm text-gray-500 py-2'>Price: ${product.price}</p>
                <p>Bracelet: <span className='font-semibold'>{product.option}</span></p>
            </div>
            <div>
                <label htmlFor='quantity' className='text-sm text-gray-500 pe-2'>Qty:</label>
                <input type='number' min='1' id='quantity' value={product.quantity} onChange={(e) => updateQuantity(product.id, product.option, parseInt(e.target.value))} className='border border-gray-300 rounded p-2 w-16' />
            </div>
            <div>
                <p className='font-semibold text-black'>${product.price * product.quantity}</p>
            </div>
            <div onClick={() => removeFromCart(product.id)} className='cursor-pointer'>
                <Trash2 />
            </div>
        </div>
    )
}
