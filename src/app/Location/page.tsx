import React from 'react'
import HomeButton from '@/components/HomeButton'
import Footer from '@/components/Footer'
import MobileFooter from '@/components/MobileFooter'
import dynamic from 'next/dynamic'

const MyAwesomeMap = dynamic(() => import("@/components/Map/map"), { ssr: false })


export default function index() {
    return (
        <div className='flex flex-col overflow-hidden'>
            <MyAwesomeMap />
            <Footer />
            <MobileFooter />
        </div>
    )
}
