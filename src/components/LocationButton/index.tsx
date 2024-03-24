import React from 'react'
import Link from 'next/link'

export default function LocationButton() {
    return (
        <Link href={"/location"}
            target='_blank'
            rel="noopener noreferrer"
        >
            <div className='w-[204px] h-[72px] inset-x-[925px] inset-y-[414px]'>

            </div>
        </Link>
    )
}
