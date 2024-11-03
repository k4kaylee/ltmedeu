import React, { ReactNode } from 'react'
import Registration from '@/img/icons/registration.svg';
import Marketing from '@/img/icons/marketing.svg';
import Distribution from '@/img/icons/distribution.svg';
import Labeling from '@/img/icons/labeling.svg';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
}

const services = [
    {
        icon: Registration,
        title: 'Registration',
    },
    {
        icon: Marketing,
        title: 'Marketing & Promotion',
    },
    {
        icon: Distribution,
        title: 'Distribution',
    },
    {
        icon: Labeling,
        title: 'Private labelling',
    },
]

function Services() {
    return (
        <div className='my-20 w-full space-y-14 px-6 max-w-[83rem]'>
            <h2 className='text-5xl font-semibold text-[#232323] text-center'>Services We Provide</h2>
            <div className='grid lg:grid-cols-2 lg:grid-rows-2 gap-6'>
                {services.map((service, index) => (
                    <div key={index} className='w-full py-12 px-20 border border-[var(--accent)] rounded-2xl flex justify-evenly text-center items-center'>
                        <div className='w-32 h-32 flex items-center justify-center mr-20'>
                            <service.icon />
                        </div>
                        <p className='text-2xl'>{service.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;
