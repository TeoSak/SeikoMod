import React from 'react'

export const Signup = () => {
    return (
        <div className='w-full h-screen flex justify-center items-start md:items-center pt-20 md:pt-0'>
            <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Create an account</h2>
                <form>
                    <input id="name" className="w-full bg-transparent border border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="text" placeholder="Enter your name" required />
                    <input id="email" className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />
                    <input id="password" className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required />
                    <button type="submit" className="w-full mb-3 mt-3 bg-blue-400 py-2.5 rounded-full text-white cursor-pointer">Sign Up</button>
                </form>
                <p className="text-center mt-4">Already have an account? <a href="/login" className="text-blue-500 underline">Login</a></p>
                <button type="button" className="w-full flex items-center gap-2 cursor-pointer justify-center mt-5 bg-black py-2.5 rounded-full text-white">
                    <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png" alt="appleLogo" />
                    Sign up with Apple
                </button>
                <button type="button" className="w-full flex items-center gap-2 cursor-pointer justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
                    <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
                    Sign up with Google
                </button>
            </div>
        </div>
    )
}
