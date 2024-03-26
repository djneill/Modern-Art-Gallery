import React from 'react'
import Footer from '@/components/Footer'
import MobileFooter from '@/components/MobileFooter'
import dynamic from 'next/dynamic'

const MyAwesomeMap = dynamic(() => import("@/components/Map/map"), { ssr: false })


export default function location() {
    return (
        <div className='flex flex-col overflow-hidden'>
            <MyAwesomeMap />
            <Footer />
            <MobileFooter />
        </div>
    )
}
