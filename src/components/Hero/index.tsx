import React from 'react'
import Image from 'next/image'
import bodyData from '@/components/(text-content)/bodyData'
import { Big_Shoulders_Display } from 'next/font/google'
import { Outfit } from 'next/font/google'

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
            <div className="hidden md:inline-flex">
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
                <p className={`${outfit.className} text-[22px] leading-[32px] absolute w-[350px] h-[160px] inset-x-[925px] inset-y-[190px] font-normal text-black`}>{bodyData[0].description}</p>
            </div>

            {/* Mobile View */}
            <div className='flex flex-col md:hidden w-[100vw] h-[240px] bg-[#979797]'>
                <Image
                    src="/assets/mobile/image-hero@2x.jpg"
                    alt="A couple walking past a painting of an elderly woman with gold glasses."
                    className='w-full h-full object-cover'
                    width={500}
                    height={500}
                />
                <div className={bigShouldersDisplay.className}>
                    <h1 className='text-6xl font-extrabold text-black leading-[60px] pl-6 py-8 uppercase'>Modern <br /> art gallery</h1>
                </div>
                <p className={`${outfit.className} text-[18px] leading-[28px] absolute w-[343px] h-[112px] inset-x-[16px] inset-y-[414px] font-normal text-black`}>{bodyData[0].description}</p>
            </div>
        </>
    )
}
