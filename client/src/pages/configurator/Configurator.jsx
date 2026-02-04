import React, { useState } from 'react'
import braceleteSilver from '../../assets/configurator/bracelet-silver.png'
import braceleteGold from '../../assets/configurator/bracelet-gold.png'
import braceleteTwoTone from '../../assets/configurator/bracelet-two-toned.png'
import weirdBraceleteSilver from '../../assets/configurator/weird-bracelet-silver.png'
import weirdBraceleteGold from '../../assets/configurator/weird-bracelet-gold.png'
import weirdBraceleteTwoTone from '../../assets/configurator/weird-bracelet-two-toned.png'
import braceleteBlack from '../../assets/configurator/bracelet-black.png'
import bodySilver from '../../assets/configurator/body-silver.png'
import bodyGold from '../../assets/configurator/body-gold.png'
import bodyTwoTone from '../../assets/configurator/body-two-toned.png'
import bodyBlack from '../../assets/configurator/body-black.png'
import circleBlack from '../../assets/configurator/circle-black.png'
import circleGold from '../../assets/configurator/circle-gold.png'
import circleBatman from '../../assets/configurator/circle-batman.png'
import circleJoker from '../../assets/configurator/circle-joker.png'
import circleGreen from '../../assets/configurator/circle-green.png'
import circleBlackGreen from '../../assets/configurator/circle-black-green.png'
import clockBlack from '../../assets/configurator/clock-black.png'
import clockGreen from '../../assets/configurator/clock-green.png'
import clockArabic from '../../assets/configurator/clock-arabic.png'
import clockBlue from '../../assets/configurator/clock-blue.png'
import clockGray from '../../assets/configurator/clock-gray.png'
import clockPurple from '../../assets/configurator/clock-purple.png'
import clockWhite from '../../assets/configurator/clock-white.png'
import timeWhite from '../../assets/configurator/time-white.png'

export const Configurator = () => {

    const [bracelet, setBracelet] = useState(braceleteSilver)
    const [activeBracelet, setActiveBracelet] = useState('silver')
    const [body, setBody] = useState(bodySilver)
    const [activeBody, setActiveBody] = useState('silver')
    const [circle, setCircle] = useState(circleBlack)
    const [activeCircle, setActiveCircle] = useState('black')
    const [clock, setClock] = useState(clockBlack)
    const [activeClock, setActiveClock] = useState('black')
    const [time, setTime] = useState(timeWhite)

    return (
        <>
            <h4 className='text-center text-5xl mt-8'>Configure</h4>
            <p className='text-gray-600 py-4 text-center'>Mod your seiko the unique way you want.</p>
            <div className='w-full h-screen my-10 lg:my-0 flex flex-col lg:flex-row justify-center items-center gap-8'>
                <div className="bg-gray-100 lg:p-4 order-2 lg:order-1 lg:rounded-lg">
                    <div>
                        <h1>Bracelet</h1>
                        <div className="flex justify-start align-center p-4 overflow-x-scroll lg:overflow-x-hidden">
                            <img src={braceleteSilver} alt="bracelet silver" className={`w-20 cursor-pointer ${activeBracelet === 'silver' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setBracelet(braceleteSilver)
                                setActiveBracelet('silver')
                            }
                            } />
                            <img src={braceleteGold} alt="bracelet gold" className={`w-20 cursor-pointer ${activeBracelet === 'gold' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setBracelet(braceleteGold)
                                setActiveBracelet('gold')
                            }} />
                            <img src={braceleteTwoTone} alt="bracelet two tone" className={`w-20 cursor-pointer ${activeBracelet === 'two-tone' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setBracelet(braceleteTwoTone)
                                setActiveBracelet('two-tone')
                            }} />
                            <img src={weirdBraceleteSilver} alt="weird bracelet silver" className={`w-20 cursor-pointer ${activeBracelet === 'weird-silver' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setBracelet(weirdBraceleteSilver)
                                setActiveBracelet('weird-silver')
                            }} />
                            <img src={weirdBraceleteGold} alt="weird bracelet gold" className={`w-20 cursor-pointer ${activeBracelet === 'weird-gold' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setBracelet(weirdBraceleteGold)
                                setActiveBracelet('weird-gold')
                            }} />
                            <img src={weirdBraceleteTwoTone} alt="weird bracelet two tone" className={`w-20 cursor-pointer ${activeBracelet === 'weird-two-tone' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setBracelet(weirdBraceleteTwoTone)
                                setActiveBracelet('weird-two-tone')
                            }} />
                            <img src={braceleteBlack} alt="bracelet black" className={`w-20 cursor-pointer ${activeBracelet === 'black' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setBracelet(braceleteBlack)
                                setActiveBracelet('black')
                            }} />
                        </div>

                    </div>
                    <div>
                        <h1>Body</h1>
                        <div className="flex justify-start align-center p-4 overflow-x-scroll lg:overflow-x-hidden">
                            <img src={bodySilver} alt="body silver" className={`w-20 cursor-pointer ${activeBody === 'silver' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setBody(bodySilver)
                                setActiveBody('silver')
                            }} />
                            <img src={bodyGold} alt="body gold" className={`w-20 cursor-pointer ${activeBody === 'gold' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setBody(bodyGold)
                                setActiveBody('gold')
                            }} />
                            <img src={bodyTwoTone} alt="body two tone" className={`w-20 cursor-pointer ${activeBody === 'two-tone' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setBody(bodyTwoTone)
                                setActiveBody('two-tone')
                            }} />
                            <img src={bodyBlack} alt="body black" className={`w-20 cursor-pointer ${activeBody === 'black' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setBody(bodyBlack)
                                setActiveBody('black')
                            }} />
                        </div>
                    </div>
                    <div>
                        <h1>Circle</h1>
                        <div className="flex justify-start align-center p-4 overflow-x-scroll lg:overflow-x-hidden">
                            <img src={circleBlack} alt="circle black" className={`w-20 cursor-pointer ${activeCircle === 'black' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setCircle(circleBlack)
                                setActiveCircle('black')
                            }} />
                            <img src={circleGold} alt="circle gold" className={`w-20 cursor-pointer ${activeCircle === 'gold' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setCircle(circleGold)
                                setActiveCircle('gold')
                            }} />
                            <img src={circleBatman} alt="circle batman" className={`w-20 cursor-pointer ${activeCircle === 'batman' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setCircle(circleBatman)
                                setActiveCircle('batman')
                            }} />
                            <img src={circleJoker} alt="circle joker" className={`w-20 cursor-pointer ${activeCircle === 'joker' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setCircle(circleJoker)
                                setActiveCircle('joker')
                            }} />
                            <img src={circleGreen} alt="circle green" className={`w-20 cursor-pointer ${activeCircle === 'green' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setCircle(circleGreen)
                                setActiveCircle('green')
                            }} />
                            <img src={circleBlackGreen} alt="circle black green" className={`w-20 cursor-pointer ${activeCircle === 'black-green' ? 'border-2 border-black' : ''}`} onClick={() => setCircle(circleBlackGreen)} />
                        </div>
                    </div>
                    <div>
                        <h1>Clock</h1>
                        <div className="flex justify-start align-center p-4 overflow-x-scroll lg:overflow-x-hidden">
                            <img src={clockBlack} alt="clock black" className={`w-20 cursor-pointer ${activeClock === 'black' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setClock(clockBlack)
                                setActiveClock('black')
                            }} />
                            <img src={clockGreen} alt="clock green" className={`w-20 cursor-pointer ${activeClock === 'green' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setClock(clockGreen)
                                setActiveClock('green')
                            }} />
                            <img src={clockArabic} alt="clock arabic" className={`w-20 cursor-pointer ${activeClock === 'arabic' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setClock(clockArabic)
                                setActiveClock('arabic')
                            }} />
                            <img src={clockBlue} alt="clock blue" className={`w-20 cursor-pointer ${activeClock === 'blue' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setClock(clockBlue)
                                setActiveClock('blue')
                            }} />
                            <img src={clockGray} alt="clock gray" className={`w-20 cursor-pointer ${activeClock === 'gray' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setClock(clockGray)
                                setActiveClock('gray')
                            }} />
                            <img src={clockPurple} alt="clock purple" className={`w-20 cursor-pointer ${activeClock === 'purple' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setClock(clockPurple)
                                setActiveClock('purple')
                            }} />
                            <img src={clockWhite} alt="clock white" className={`w-20 cursor-pointer ${activeClock === 'white' ? 'border-2 border-black' : ''}`} onClick={() => {
                                setClock(clockWhite)
                                setActiveClock('white')
                            }} />
                        </div>
                    </div>
                </div>
                <div className='bg-white order-1 lg:order-2 mt-8 flex justify-center items-center'>
                    <div className='w-64 h-64 lg:w-94 lg:h-94 bg-transparent z-0 flex justify-center items-center relative bg-cover bg-center'
                        style={{ backgroundImage: `url(${bracelet})` }}>
                        <div className='w-64 h-64 lg:w-94 lg:h-94 bg-transparent z-10 flex justify-center items-center relative bg-cover bg-center'
                            style={{ backgroundImage: `url(${body})` }}>
                            <div className='w-64 h-64 lg:w-94 lg:h-94 bg-transparent z-20 flex justify-center items-center relative bg-cover bg-center'
                                style={{ backgroundImage: `url(${circle})` }}>
                                <div className='w-64 h-64 lg:w-94 lg:h-94 bg-transparent z-30 flex justify-center items-center relative bg-cover bg-center'
                                    style={{ backgroundImage: `url(${clock})` }}>
                                    <div className='w-64 h-64 lg:w-94 lg:h-94 bg-transparent z-10 flex justify-center items-center relative bg-cover bg-center'
                                        style={{ backgroundImage: `url(${time})` }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='px-4 lg:px-50 py-10'>
                <hr className='text-gray-300' />
                <h5 className='text-2xl font-semibold py-4'>What is a Seiko Mod?</h5>
                <p className='text-gray-600 py-2'>A modified Seiko watch, commonly referred to as a "Seiko Mod," refers to an original Seiko watch that has been <span className='font-semibold'>customized and modified</span> to cater to the preferences and specific needs of watch enthusiasts. These modifications can be aesthetic, functional, or both.</p>
                <p className='text-gray-600 py-2'>Aesthetic modifications can involve changes to the dial, case, hands, bezel, bracelet, and more. All parts of the watch can be altered. These modifications allow for the creation of a unique and distinct watch that aligns with personal tastes.</p>
                <p className='text-gray-600 py-2'>Functional modifications may include upgrading the movement, enhancing water resistance, or adding complications such as <span className='font-semibold'>date displays or chronographs</span>. These changes can improve the watch's performance and usability.</p>
            </div>
        </>
    )
}
