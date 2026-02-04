import React from 'react'

export const Button = ({ children }) => {
    return (
        <button className='bg-blue-400 text-black font-medium px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer'>
            {children}
        </button>
    )
}
