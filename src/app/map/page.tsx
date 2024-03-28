import HomeButton from '@/components/HomeButton'
import React from 'react'
import Footer from '@/components/Footer'
import MobileFooter from '@/components/MobileFooter'

export default function map() {
    return (
        <>
            <div className='grid'>
                <div className="col-start-1 row-start-1 relative top-32 left-2 z-40">
                    <HomeButton />
                </div>
                <div className='col-start-1 row-start-1 z-30 w-full'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11955.424810365046!2d-71.3082017!3d41.4857171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e5af43206d6ac1%3A0x961626df7ce67a5f!2sNewport%20Art%20Museum!5e0!3m2!1sen!2sus!4v1711614438899!5m2!1sen!2sus" width="100%" height="600" style={{ border: 0 }} loading="lazy" ></iframe>
                </div>
            </div>
            <Footer />
            <MobileFooter />
        </>
    )
}
