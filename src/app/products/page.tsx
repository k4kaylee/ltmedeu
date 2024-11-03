'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Download from '@/img/icons/download.svg'
import Search from '@/img/icons/search.svg'
import ToggleButton from '../components/ProductCategoryButton'
import Image from 'next/image'
import Endovascular from '@/img/Endovascular.png'

function Page() {
    const [activeButton, setActiveButton] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveButton(activeButton === index ? null : index);
    };

    return (
        <div className='max-w-[80rem] w-full'>
            <div className="text-sm text-[#9D9D9D] mt-8 mb-6">
                <Link href="/">Main page</Link> - <span className="text-[var(--accent)]">Products</span>
            </div>
            <h2 className='text-7xl font-semibold'>Product categories</h2>
            <div className='flex gap-4 my-6'>
                <div className='h-14 rounded-lg border border-[#6D6D6D] py-2 px-4 bg-white flex-1 flex items-center space-x-2'>
                    <Search />
                    <input className='w-full h-full border-none outline-none text-xl' placeholder='Search products...' />
                </div>
                <button className='flex items-center justify-between space-x-2 py-2 px-4 w-fit h-14 text-white text-xl rounded-lg select-none bg-[var(--accent)]'>
                    <p>Download full product catalog</p>
                    <Download className='h-full' />
                </button>
            </div>
            <div className="w-full flex gap-4 h-14">
                <ToggleButton
                    label="Endovascular Product"
                    isActive={activeButton === 0}
                    onClick={() => handleToggle(0)}
                />
                <ToggleButton
                    label="Surgical Stapling"
                    isActive={activeButton === 1}
                    onClick={() => handleToggle(1)}
                />
                <ToggleButton
                    label="Cardiac Surgery"
                    isActive={activeButton === 2}
                    onClick={() => handleToggle(2)}
                />
                <ToggleButton
                    label="Electrophysiology"
                    isActive={activeButton === 3}
                    onClick={() => handleToggle(3)}
                />
            </div>
            <div className='grid grid-cols-4 gap-4 my-12'>
                {[Endovascular, Endovascular, Endovascular, Endovascular].map((imageSrc, index) => (
                    <div key={index} className='h-96 w-full rounded-3xl relative flex flex-col items-center justify-between py-6 px-8'
                        style={{ boxShadow: '0px 4px 14.2px 0px #00000026' }}>
                        <Image className='object-contain z-0' src={imageSrc} alt={`Product category ${index + 1} image`} fill />
                        <h3 className='text-xl font-semibold text-center relative  z-1'>Product Category {index + 1}</h3>
                        <button className='bg-[var(--accent)] w-full rounded-xl py-4 px-8 text-xl text-white relative z-1'>
                            More products
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page
