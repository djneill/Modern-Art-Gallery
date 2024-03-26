import React from 'react'
import Map from '@/components/Map/map'
import HomeButton from '@/components/HomeButton'
import Footer from '@/components/Footer'
import MobileFooter from '@/components/MobileFooter'

export default function index() {
    return (
        <div className='flex flex-col overflow-hidden'>
            <Map />
            <Footer />
            <MobileFooter />
        </div>
    )
}
