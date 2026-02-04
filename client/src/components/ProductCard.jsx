import React, { useState } from 'react'
import { Eye } from 'lucide-react'
import { PopUp } from './PopUp'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center my-4 cursor-pointer group relative ">
            <div className="w-full z-10 text-gray-600 pe-8 flex justify-end align-center">
                <button onClick={() => setOpen(true)}>
                    <Eye className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" />
                </button>
                {open && <PopUp onClose={() => setOpen(false)} product={product} />}
            </div>
            <Link
                to={`/item/${product.id}`}>
                <img src={product.image_jubilee[0]} alt={product.name} className="object-cover mb-2" />
                <h4 className="text-md font-semibold">{product.name.slice(0, 25)}{product.name.length > 25 ? '...' : ''}</h4>
                <p className="text-gray-600">${product.price}</p>
            </Link>
        </div>
    )
}
