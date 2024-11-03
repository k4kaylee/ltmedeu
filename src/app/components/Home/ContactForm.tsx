import React from 'react'
import Selector from '../common/Selector'

function ContactForm() {
    return (
        <div className='w-full bg-[var(--accent)] rounded-3xl py-16 px-24 text-white max-w-[80rem] space-y-8'>
            <h2 className='text-center text-5xl font-medium'>Contact us!</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 flex-col md:flex-row'>
                    <input className='w-full bg-white bg-opacity-20 placeholder-current px-8 py-4 rounded-xl' placeholder='First Name' />
                    <input className='w-full bg-white bg-opacity-20 placeholder-current px-8 py-4 rounded-xl' placeholder='Last Name' />
                </div>
                <div className='flex gap-4 flex-col md:flex-row'>
                    <input className='w-full bg-white bg-opacity-20 placeholder-current px-8 py-4 rounded-xl' placeholder='E-mail address' />
                    <input className='w-full bg-white bg-opacity-20 placeholder-current px-8 py-4 rounded-xl' placeholder='Phone number' />
                </div>
                <div className='flex gap-4 flex-col md:flex-row'>
                    <Selector content='Country' data={['1', '2', '3', '4', '5', '6']} />
                    <Selector content='Request type' data={['Type 1', 'Type 2', 'Type 3']} />
                </div>
                <textarea
                    className="w-full bg-white bg-opacity-20 placeholder-current px-8 py-4 rounded-xl h-48 align-top"
                    placeholder="Leave your message here"
                />
                <button className="px-8 py-4 bg-white text-[var(--accent)] rounded-xl w-64">Send message</button>
            </div>
        </div>
    )
}

export default ContactForm