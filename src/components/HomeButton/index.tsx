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

export default function HomeButton() {
    return (
        <Link href="/" target="_blank" rel="noopener noreferrer">
            <div className=''>
                <div className='flex w-[260px] h-[72px] group transition'>
                    <div className='flex justify-center items-center w-[56px] h-[72px] bg-[#D5966C] group-hover:bg-black'>
                        <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="M9 24 1 12 9 0" /></svg>
                    </div>
                    <div className='flex justify-center items-center w-[204px] h-[72px] bg-black group-hover:bg-[#D5966C]'>
                        <p className={`${bigShouldersDisplay.className} uppercase font-extrabold text-[20px] leading-[28px] tracking-widest`}>Back To Home</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
