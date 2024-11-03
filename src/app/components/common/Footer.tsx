import React from 'react'
import SvgLtmedLogoFooter from '@/img/icons/LTMED logo footer.svg';
import LTMed from '@/img/LTMed logo.svg'
import Link from 'next/link';

function Footer() {
    return (
        <div className='w-screen bg-[#F7F7F7] px-24 py-16 relative -px-8 flex lg:gap-x-64 md:gap-x-32'>
            <div className='w-[50rem] absolute left-0 bottom-0'>
                <SvgLtmedLogoFooter />
            </div>

            <div className='flex flex-col w-fit'>
                <div className='w-48'>
                    <LTMed />
                </div>
                <p className='text-2xl font-bold max-w-[30ch] mt-8'>
                    LTMed OU operates in field of marketing and distribution of medical products
                </p>

                <div className='flex justify-between mt-16 w-72'>
                    <div className='space-y-4 text-lg'>
                        <p className='font-light opacity-70'>EORI number</p>
                        <p>EE14269125</p>
                    </div>

                    <div className='space-y-4 text-lg'>
                        <p className='font-light opacity-70'>VAT number</p>
                        <p>EE101975869</p>
                    </div>
                </div>

                <div className='mt-8 space-y-8 text-lg'>
                    <p className='font-light opacity-70'>Address</p>
                    <p className='max-w-[35ch]'>11415 Harju maakond, Tallinn, Lasnamäe linnaosa, Peterburi tee 81, Estonia</p>
                </div>
            </div>

            <div className='flex flex-col space-y-4 mt-12 text-xl'>
                <p className='opacity-70 text-base'>Navigation</p>
                <Link href='/company'>Company</Link>
                <Link href='/products'>Products</Link>
                <Link href='/responsibility'>Responsibility</Link>
                <Link href='/contacts'>Contacts</Link>
            </div>

            <div className='mt-12 text-2xl space-y-5'>
                <div className='space-y-2 flex flex-col'>
                    <p className='opacity-70 text-base mb-1'>Tel/fax</p>
                    <a>+372 5871 2338</a>
                    <a>+372 5306 4689</a>
                </div>

                <div className=''>
                    <p className='opacity-70 text-base mb-4'>Email</p>
                    <a>info@ltmed.eu</a>
                </div>
            </div>

        </div>
    )
}

export default Footer;
