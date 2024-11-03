import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import responsibility from '@/img/responsibility.jpg'

interface DocumentCardProps {
    title: string;
    description: string;
    z: number;
}

const DocumentCard = ({ title, description, z }: DocumentCardProps) => {
    return (
        <div className={`w-full h-32 rounded-3xl p-[1px] transition-margin duration-150 -mb-20 hover:mb-0 relative z-[${z}]`} style={{
            backgroundImage: 'linear-gradient(180deg, #08BBB9 0%, rgba(8, 187, 185, 0) 100%)'
        }}>
            <div className='w-full h-full bg-white rounded-3xl py-2 px-8 text-center space-y-1'>
                <h3 className='font-medium text-2xl'>{title}</h3>
                <p className='text-xl font-light'>{description}</p>
            </div>
        </div>
    )
}

const documents = [
    { title: 'WHO, 1988', description: 'Code of marketing practices of pharmaceutical manufacturers and their representatives (companies)', z: 1 },
    { title: 'IFPMA, 1993', description: 'International Federation of Pharmaceutical Manufacturers and Associations Code', z: 2 },
    { title: 'IFPMA, 1994', description: 'Updated IFPMA guidelines for pharmaceutical promotion', z: 3 },
    { title: '2001/83/EC', description: 'Directive on the Community code relating to medicinal products for human use', z: 4 },
    { title: 'EBA 2004', description: 'Code of marketing practices of pharmaceutical manufacturers and their representatives (companies)', z: 5 },
    { title: 'APRAD, 2006', description: 'Code of Conduct for the promotion of medicinal products', z: 6 },
    { title: 'EBA 2008', description: 'Regulation of marketing activities', z: 7 }
]

function Page() {
    return (
        <div className='flex flex-col items-center '>
            <div className='text-sm text-[#9D9D9D] mt-8 max-w-[80rem] w-full'>
                <Link href='/'>Main page</Link> - <span className='text-[var(--accent)]'>Responsibility</span>
            </div>
            <div className='max-w-[85rem] rounded-3xl overflow-hidden relative my-6'>
                <div className='absolute text-white px-8 py-12 font-light space-y-12 text-xl'>
                    <h2 className='text-6xl font-semibold'>Responsibility</h2>
                    <p>
                        The Company shares and strongly adheres to our partners’ responsibility in the field of ethical promotion of medicines and medical products. LTMed’s promotional activities are based on an internal document (Code of Marketing Practices of LTMed OU) and recommendations of international organizations covering medical companies promotional activities regulation
                    </p>
                </div>
                <Image src={responsibility} alt='Background image showing two persons signing a document' />
            </div>
            <div className='max-w-[80rem] h-[35rem] text-3xl my-8 font-medium'>
                <p className='mb-4'>The Company recognizes and supports relevant documents developed by various reputable organizations:</p>
                {documents.map((doc, index) => (
                    <DocumentCard
                        key={index}
                        title={doc.title}
                        description={doc.description || 'Description not available.'}
                        z={doc.z}
                    />
                ))}
            </div>
        </div>
    )
}

export default Page
