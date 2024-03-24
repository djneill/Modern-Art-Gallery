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
        <main className='hidden md:block px-20 mx-20 my-20 '>
            {/* md:w-[1110px] md:h-[1150px] md:inset-x-[165px] md:inset-y-[980px] */}
            <div className='flex my-8 '>
                <div className='w-2/5'>
                    <h2 className={`${bigShouldersDisplay.className} w-[350px] uppercase almostBlack text-6xl leading-[50px] font-bold my-4`}>{bodyData[1].description}</h2>
                    <h2 className={`${bigShouldersDisplay.className} w-[350px] uppercase almostBlack text-6xl leading-[50px] font-bold`}>{bodyData[2].description}</h2>
                    <p className={`${outfit.className} w-[350px] text-[16px] leading-[28px] font-normal text-[#444444] my-8`}>{bodyData[3].description}</p>
                </div>
                <Image
                    src="/assets/desktop/image-grid-1@2x.jpg"
                    alt="Image of the gallery room."
                    className='w-3/5'
                    width={635}
                    height={400}
                />
            </div>
            <div className='flex my-8'>
                <Image
                    src="/assets/desktop/image-grid-2@2x.jpg"
                    alt="Image of the gallery room."
                    className='w-3/5 h-[720px] mx-4'
                    width={635}
                    height={720}
                />

                <div className='flex flex-col w-2/5 '>
                    <Image
                        src="/assets/desktop/image-grid-3@2x.jpg"
                        alt="Image of the gallery room."
                        className='h-[313px]'
                        width={445}
                        height={313}
                    />
                    <div className='w-[445px] h-[377px] bg-[#141414] mt-8'>
                        <div className='w-[295px] h-[198px] inset-x-[40px] inset-y-[2110px] py-12 pl-8'>
                            <h1 className={`${bigShouldersDisplay.className} uppercase text-6xl font-bold text-[#FFFFFF] leading-[50px} mx-auto pb-8`}>
                                Come & Be inspired
                            </h1>
                            <p className={`${outfit.className} w-[340px] text-[18px] leading-[28px] font-normal text-[#FFFFFF]`}>We&apos;re excited to welcome you to our gallery and see how our collections influence you</p>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
