import React from 'react'
import LTMed from '@/img/LTMed logo.svg'
import Link from 'next/link'
import LanguageSelector from '../header/LanguageSelector'

function Header() {
    return (
        <div className='z-99 py-6 w-full flex justify-between h-26 max-w-[83rem]'>
            <Link href='/' className='w-44 pl-4 ml-2'>
                <LTMed />
            </Link>
            <div className='flex justify-between items-center text-xl w-1/2'>
                <Link href="/company">Company</Link>
                <Link href="/products">Products</Link>
                <Link href="/responsibility">Responsibility</Link>
                <Link href="/contacts">Contacts</Link>
                <LanguageSelector />
            </div>
        </div>

    )
}

export default Header