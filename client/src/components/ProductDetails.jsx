import React, { useState } from 'react'
import { Check } from 'lucide-react'
import { useCart } from '../context/CartContext';

export const ProductDetails = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState('Jubilee');
    const [activeImage, setActiveImage] = useState(product.image_jubilee[0]);
    const [activeOysterImage, setActiveOysterImage] = useState(product.image_oyster[0]);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const [selectedOption, setSelectedOption] = useState(product.option_1);
    const handleAddToCart = () => {
        addToCart({
            id: `${product.id}-${selectedOption}`,
            name: product.name,
            price: product.price,
            image_jubilee: product.image_jubilee[0],
            image_oyster: product.image_oyster[0],
            quantity: quantity,
            option: selectedOption
        });
    }

    return (
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
            <div className='flex flex-col justify-center align-center p-4'>
                <img src={selectedImage === 'Jubilee' ? activeImage : activeOysterImage} alt={product.name} className='w-100' />
                <div className='flex flex-row mt-4 space-x-2'>
                    {selectedImage === 'Jubilee' ? product.image_jubilee.slice(0, 4).map((img, index) => (
                        <img key={index} onClick={() => setActiveImage(img)} src={img} alt={`${product.name} ${index + 1}`} className="w-16 h-16 object-cover cursor-pointer border-2 border-gray-300 rounded" />
                    )) : product.image_oyster.slice(0, 4).map((img, index) => (
                        <img key={index} onClick={() => setActiveOysterImage(img)} src={img} alt={`${product.name} ${index + 1}`} className="w-16 h-16 object-cover cursor-pointer border-2 border-gray-300 rounded" />
                    ))}
                </div>
            </div>
            <div className='p-4'>
                <h2 className='text-4xl text-black font-normal mb-4'>{product.name}</h2>
                <p className='text-2xl text-gray-900 mb-4'>${product.price}</p>
                <h5 className='text-large text-black font-bold'>Tax included</h5>
                <hr className='text-gray-300 my-2' />
                {product.two_options && (
                    <>
                        <h6 className="pt-4">BRACELET</h6>
                        <select
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="py-2 ps-4 pe-20 font-semibold border border-gray-300 cursor-pointer"
                        >
                            <option value={product.option_1}>
                                {product.option_1}
                            </option>
                            <option value={product.option_2}>
                                {product.option_2}
                            </option>
                        </select>
                    </>
                )}

                <div className='mt-8 flex justify-start align-center'>
                    <h6 className='p-2'>Quantity</h6>
                    <input type="number" min="1" defaultValue="1" value={quantity} onChange={(e) => setQuantity(+e.target.value)} className='w-16 ms-4 p-2 border border-gray-300 text-center' />
                </div>
                <button onClick={handleAddToCart} className='bg-black text-white py-4 px-20 my-8 cursor-pointer'>ADD TO CART</button>
                <div className='flex items-center gap-2'><span>
                    <Check className='text-green-500' size={20} /></span>
                    <p className='text-black font-semibold'> In stock - Delivery within 1 - 2 weeks</p>
                </div>
            </div>
        </div>
    )
}
