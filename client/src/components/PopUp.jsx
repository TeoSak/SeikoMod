import React from 'react'
import { ProductDetails } from './ProductDetails'

export const PopUp = ({ onClose, product }) => {
    return (
        <div className="fixed inset-0 bg-black bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-4 mx-60 rounded-lg">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        &#10005;
                    </button>
                </div>
                <div className="p-10">
                    <ProductDetails product={product} />
                </div>
            </div>
        </div>
    )
}
