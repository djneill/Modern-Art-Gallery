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


export default function MobileBody() {
    return (
        <main className=' md:hidden flex flex-col w-full h-[1605px] inset-x-[16px] inset-y-[750px] my-20 px-4 overflow-hidden'>
            <Image
                src="/assets/desktop/image-grid-1@2x.jpg"
                alt="Image of the gallery room."
                className='w-full'
                width={340}
                height={320}
            />
            <div className=' w-full h-[223px] inset-x-[16px] inset-y-[1095px] py-8 mx-4'>
                <h2 className={`${bigShouldersDisplay.className} uppercase almostBlack font-bold text-6xl leading-[50px] pb-1`}>{bodyData[1].description}</h2>
                <h2 className={`${bigShouldersDisplay.className} uppercase almostBlack font-bold text-6xl leading-[50px]`}>{bodyData[2].description}</h2>
                <p className={`${outfit.className} text-[18px] leading-[28px] font-normal text-[#444444] 2-[340px] pr-10 py-8`}>{bodyData[3].description}</p>
            </div>

            <Image
                src="/assets/desktop/image-grid-2@2x.jpg"
                alt="Image of the gallery room."
                className='w-full my-8 mt-20'
                width={343}
                height={680}
            />
            <Image
                src="/assets/desktop/image-grid-3@2x.jpg"
                alt="Image of the gallery room."
                className='w-full'
                width={343}
                height={200}
            />
            <div className='w-full h-[293px] bg-[#141414] my-8'>
                <div className='w-[295px] h-[198px] inset-x-[40px] inset-y-[2110px] py-8 pl-8'>
                    <h1 className={`${bigShouldersDisplay.className} uppercase text-6xl font-bold text-[#FFFFFF] leading-[50px} mx-auto pb-4`}>
                        Come & Be inspired
                    </h1>
                    <p className={`${outfit.className} text-[18px] leading-[28px] font-normal text-[#FFFFFF]`}>We&apos;re excited to welcome you to our gallery and see how our collections influence you</p>
                </div>
            </div>
        </main>
    )
}
