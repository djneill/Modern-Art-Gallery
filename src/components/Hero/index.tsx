import React from 'react'
import Image from 'next/image'
import bodyData from '@/components/(text-content)/bodyData'
import { Big_Shoulders_Display } from 'next/font/google'
import { Outfit } from 'next/font/google'
import LocationButton from '@/components/LocationButton'
import MobileLocationButton from '@/components/MobileLocationButton'

const bigShouldersDisplay = Big_Shoulders_Display({
    subsets: ['latin'],
    variable: '--font-big-shoulders-display',
})
const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
})

export default function Hero() {
    return (
        <>
            <div className="hidden md:inline-flex h-[800px] container">
                <div className='w-[450px] h-[100vh] bg-[#000000]'></div>
                <div className='w-[540px] h-[100vh] bg-[#979797] inset-x-[450px]'>
                    <Image
                        src="/assets/desktop/image-hero@2x.jpg"
                        alt="A couple walking past a painting of an elderly woman with gold glasses."
                        className='w-full h-full object-cover'
                        width={500}
                        height={500}
                    />
                </div>
                <div className={bigShouldersDisplay.className}>
                    <h1 className='text-8xl font-black tracking-normal leading-[88px] absolute inset-x-[165px] inset-y-[189px] uppercase mix-blend-difference'>Modern <br /> art gallery</h1>
                </div>
                <div className=''>
                    <p className={`${outfit.className} text-[22px] leading-[32px] absolute w-[350px] h-[160px] lg:inset-x-[925px] lg:inset-y-[190px] md:inset-x-[150px] md:inset-y-[450px] md:text-sky-500 font-normal lg:text-black`}>{bodyData[0].description}</p>
                    <LocationButton />
                </div>
            </div>

            {/* Mobile View */}
            <div className='md:hidden w-full h-[630px] overflow-hidden'>
                <div className=' flex flex-col md:hidden w-full h-[240px]'>
                    <Image
                        src="/assets/mobile/image-hero@2x.jpg"
                        alt="A couple walking past a painting of an elderly woman with gold glasses."
                        className='w-full h-full object-cover'
                        width={375}
                        height={240}
                    />
                    <h1 className={`${bigShouldersDisplay.className} text-6xl font-extrabold text-black leading-[60px] inset-x-[16px]  inset-y-[272px] w-[343px] h-[110px] uppercase py-8 pl-4`}>Modern <br /> art gallery</h1>
                    <p className={`${outfit.className} text-[16px] leading-[28px] absolute w-[343px] h-[112px] inset-x-[16px] inset-y-[414px] font-normal text-[#444444]`}>{bodyData[0].description}</p>
                    <MobileLocationButton />
                </div>
            </div>
        </>
    )
}
