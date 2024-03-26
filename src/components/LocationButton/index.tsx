import React from 'react'
import Link from 'next/link'
import { Outfit } from 'next/font/google'
import { Big_Shoulders_Display } from 'next/font/google'

const bigShouldersDisplay = Big_Shoulders_Display({
    subsets: ['latin'],
    variable: '--font-big-shoulders-display',
})
const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
})

export default function LocationButton() {
    return (
        <Link href={"/location"}
            target='_blank'
            rel="noopener noreferrer"
        >
            <div className='flex absolute w-[260px] h-[72px] inset-x-[925px] inset-y-[414px] group transition'>
                <div className='flex justify-center items-center w-[204px] h-[72px] bg-black group-hover:bg-[#D5966C]'>
                    <p className={`${bigShouldersDisplay.className} uppercase font-extrabold text-[20px] leading-[28px] tracking-widest`}>our location</p>
                </div>
                <div className='flex justify-center items-center w-[56px] h-[72px] bg-[#D5966C] group-hover:bg-black'>
                    <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" /></svg>
                </div>
            </div>
        </Link>
    )
}
