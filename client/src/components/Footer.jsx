import React from 'react'

export const Footer = () => {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-gray-900 text-white pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                <div className="sm:col-span-2 lg:col-span-1">
                    <a href="/">
                        <h1 className="text-2xl text-blue-400 font-bold">SeikoMods.gr</h1>
                    </a>
                    <p className="text-sm/7 mt-6">Seiko mod is a service that customizes Seiko watches with unique designs and features.</p>
                </div>
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="flex flex-col text-sm space-y-2.5">
                        <h2 className="font-semibold mb-5">Company</h2>
                        <a className="hover:text-slate-600 transition" href="#">Collection</a>
                        <a className="hover:text-slate-600 transition" href="/history">History</a>
                        <a className="hover:text-slate-600 transition" href="#">Blog</a>
                        <a className="hover:text-slate-600 transition" href="#">Privacy policy</a>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold mb-5">Subscribe to our newsletter</h2>
                    <div className="text-sm space-y-6 max-w-sm">
                        <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                        <div className="flex items-center justify-center gap-2 p-2 rounded-md">
                            <input className="focus:ring-2 bg-white text-black ring-indigo-600 outline-none w-full max-w-64 py-2 rounded px-2" type="email" placeholder="Enter your email" />
                            <button className="bg-blue-400 px-4 py-2 text-white rounded">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="py-4 text-center border-t mt-6 border-slate-200">
                Copyright 2025 © <a href="/">SeikoMods.gr</a> All Right Reserved.
            </p>
        </footer>
    )
}
