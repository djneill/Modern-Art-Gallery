import React from 'react'
import bodyData from '@/components/(text-content)/bodyData'
import { Big_Shoulders_Display } from 'next/font/google'
import { Outfit } from 'next/font/google'
import Image from 'next/image'

const bigShouldersDisplay = Big_Shoulders_Display({
    subsets: ['latin'],
    variable: '--font-big-shoulders-display',
})
const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
})


export default function Body() {
    return (
        <main className='hidden md:block md:w-[1110px] md:h-[1150px] md:inset-x-[165px] md:inset-y-[980px] mx-auto my-20'>
            <div className='w-[350px] h-[280px] inset-x-[165px] inset-y-[1040px]'>
                <h2 className={`${bigShouldersDisplay.className} uppercase almostBlack text-6xl leading-[50px]`}>{bodyData[1].description}</h2>
                <p className={`${outfit.className} text-[16px] leading-[28px] font-normal text-[#444444]`}>{bodyData[2].description}</p>
            </div>
            <Image
                src="/assets/desktop/image-grid-1@2x.jpg"
                alt="Image of the gallery room."
                className='w-[635px] h-[400px] inset-x-[640px] inset-y-[980px]'
                width={635}
                height={400}
            />
            <Image
                src="/assets/desktop/image-grid-2@2x.jpg"
                alt="Image of the gallery room."
                className='w-[635px] h-[720px] inset-x-[165px] inset-y-[1410px]'
                width={635}
                height={720}
            />
            <Image
                src="/assets/desktop/image-grid-3@2x.jpg"
                alt="Image of the gallery room."
                className='w-[445px] h-[313px] inset-x-[165px] inset-y-[1410px] align-right'
                width={635}
                height={720}
            />
        </main>
    )
}
