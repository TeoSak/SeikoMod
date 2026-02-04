import React from 'react'
import { assets } from '../../assets/assets'

export const History = () => {
    return (
        <div className='py-10 px-4 lg:px-50'>
            <h6 className='text-xl text-center'>ABOUT US</h6>
            <h5 className='text-3xl text-center'>Learn more about our journey</h5>
            <div className='w-full flex justify-center items-center'>
                <img src={assets.watchMaking} alt="Watch Making" className='my-6' />
            </div>
            <p className='py-4'>Once I got started, I discovered that absolutely everything could be changed—and that customization could go even further than I ever imagined. I’ve always had this “hands-on” mindset, paying close attention to details and really caring about the item I’m working on. I realized this back when I was working with cars, where certain parts required extra precision and care. Whenever things got complicated, I was usually the one people called.</p>
            <p className='py-4'>So I began with my brother’s watch: replacing the hands, the crown, and the bezel. And the result was pretty good!</p>
            <p className='py-4'>That’s when everything took shape. I created the company and started promoting my work on Instagram. SeikoMods.gr was born.</p>
            <p className='py-4'>Due to Covid, all my spots were canceled. I then decided to create a small workspace at home (my wife was very happy about that), invested in professional equipment, and fully committed to modding watches. That’s when SeikoMods.gr truly came to life.</p>
            <p className='py-4'>I can’t really say when my passion for watches began, because it’s always been there. Modding was simply my way of taking that passion one step further.</p>
            <div className='w-full flex justify-center items-center'>
                <img src={assets.contactUsWatch} alt="Watch Making" className='my-6 w-72' />
            </div>
            <p className='py-4'>SeikoMods.gr is a part of me. I am very patient, calm, and I always pay close attention to the smallest details. When designing and creating watches, we can spend hours on things that 99% of people would never even notice. For me, that’s exactly where the difference is made.</p>
            <p>The most important thing is to give my clients the best experience I can possibly offer—and I make sure to do that well.</p>
            <p className='py-4'>At first, I learned by working on my own projects. Then, I started collaborating with watchmakers who work for major Swiss brands. With them, I was able to learn, refine my skills, and truly complete the learning process.</p>
            <p className='py-4'>nstagram helped us a lot in promoting our brand, and now our website will help us take the next step. Thank you for reading, and thank you for being part of this journey. Having you with us today means a lot.</p>
            <p className='py-4'>We hope you’ll enjoy working with us as much as we love working for you.</p>
            <p className='py-4'>The fact that you’re reading this gives us strength, motivation, and the will to keep pushing forward.</p>
        </div>
    )
}
