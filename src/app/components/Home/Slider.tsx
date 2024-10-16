import React from 'react'
import SeniorLady from '@/img/senior-lady.jpg'
import Image from 'next/image'
import SliderSelectors from './SliderSelectors'

function Slider() {
    return (
        <div className='rounded relative'>
            <Image src={SeniorLady} alt='A senior lady monitoring data' className='rounded-3xl' />
            <div className='bg-black bg-opacity-50 absolute top-0 h-full w-full rounded-3xl text-white flex flex-col items-center justify-center pt-12 space-y-14'>
                <h1 className='text-7xl font-semibold'>Welcome to LTMed</h1>
                <p className='text-2xl text-center'>LTMed OU operates in field of marketing<br />and distribution of medical products</p>
                <div className='!mt-28 flex flex-col items-center gap-8'>
                    <button className='w-72 h-14 bg-[var(--accent)] rounded-lg text-xl'>
                        More details
                    </button>
                    <SliderSelectors />
                </div>
            </div>
        </div >
    )
}

export default Slider