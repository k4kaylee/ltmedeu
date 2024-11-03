import React from 'react'
import Link from 'next/link'
import businessCard from '@/img/business_card.png'
import Image from 'next/image'
import ContactForm from '../components/Home/ContactForm'

function page() {
    return (
        <div>
            <div className="max-w-[80rem] text-[#232323]">
                <div className="text-sm text-[#9D9D9D] mt-8 mb-6">
                    <Link href="/">Main page</Link> - <span className="text-[var(--accent)]">Contacts</span>
                </div>
                <h2 className="text-6xl font-semibold">Contacts</h2>

                <div className="w-full mt-6 relative">
                    <Image src={businessCard} alt="A person holding business card with CEO contact information" />
                </div>

                <div className="my-16 space-y-12">
                    <div className="space-y-4">
                        <p className="text-[#272727]">Address</p>
                        <p className="text-xl font-medium">
                            11415 Harju maakond, Tallinn, Lasnamäe linnaosa, Peterburi tee 81, Estonia.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-[#272727]">Company details</p>
                        <p className="text-xl font-medium leading-2">
                            Office address:<br />
                            11415 Harju maakond, Tallinn, Lasnamäe linnaosa, Peterburi tee 81, Estonia.<br />
                            Business identification number: 14269125<br />
                            EU tax identification number: EE101975869<br />
                            Bank account: AS Citadele banka Eesti filiaal, Tallinn, Estonia. SWIFT: PARXEE22<br />
                            Bank account number: EE831200001243321367<br />
                            EORI number: EE14269125<br />
                            VAT number: EE101975869
                        </p>
                    </div>
                    <div className="my-16 space-y-12">
                        <div className="space-y-4">
                            <p className="text-[#272727]">Warehouse addresses</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                <div className="text-xl font-medium leading-2">
                                    <p>Estonia:</p>
                                    <p>Nordis OU, Punane 42/5, Tallinn</p>
                                    <p className='mt-2'>Contact person:</p>
                                    <p>Keiu, keiu@nordis.ee, +372 5871 2338</p>
                                </div>
                                <div className="text-xl font-medium leading-2 col-span-2">
                                    <p>Lithuania:</p>
                                    <p>UAB AXIS Transport, Motoru g. 4, LT-02190, Vilnius</p>
                                    <p className='mt-2'>Contact person:</p>
                                    <p>Veslav, veslav.ediakov@axistransport.lt, +370 6994 2050</p>
                                    <p>UAB Rhenus Svoris, Meteliu g. 12, LT-02236 Vilnius</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                            <div>
                                <p className="text-[#272727]">Tel/fax</p>
                                <p className="text-xl font-medium leading-2">
                                    +372 5871 2338<br />
                                    +372 5306 4689
                                </p>
                            </div>
                            <div>
                                <p className="text-[#272727]">E-mail</p>
                                <p className="text-xl font-medium leading-2">info@ltmed.eu</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                            <div>
                                <p className="text-[#272727]">Country Manager:</p>
                                <p className="text-xl font-medium leading-2">
                                    Sandra Maria Kaer<br />
                                    E-mail: sandra@ltmed.eu
                                </p>
                            </div>
                            <div>
                                <p className="text-[#272727]">Accountant:</p>
                                <p className="text-xl font-medium leading-2">
                                    Svetlana Gintelman<br />
                                    E-mail: s.gintelman@ltmed.eu
                                </p>
                            </div>
                            <div>
                                <p className="text-[#272727]">Customer Service:</p>
                                <p className="text-xl font-medium leading-2">
                                    Kate Spetisova<br />
                                    E-mail: order@ltmed.eu
                                </p>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default page
