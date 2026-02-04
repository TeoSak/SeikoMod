import React from 'react'

export const ConfigureBanner = () => {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="flex flex-col items-center justify-center md:mx-auto max-md:mx-2 max-md:px-2 max-w-5xl md:w-full text-center rounded-2xl py-8 md:py-24 bg-gradient-to-r from-blue-600 to-blue-900">
                <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl">Build your own customizable seiko watch</h1>
                <div className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-white"></div>
                <p className="text-sm md:text-base text-white max-w-xl">
                    In a world where individuality matters, why settle for a watch that everyone else has? Choose from a variety of dials, straps, and bezels to create a timepiece that is truly your own.
                </p>
                <button className="px-10 py-3 mt-4 text-sm bg-white cursor-pointer hover:scale-105 transition duration-300 rounded-full">
                    <a href="/configurator">Configure Your Watch</a>
                </button>
            </section>
        </>
    )
}
