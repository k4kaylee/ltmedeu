import React from 'react'

function ContactsSection() {
    return (
        <div className='max-w-[80rem] py-16 space-y-16'>
            <h2 className='text-5xl text-center font-semibold'>Have a question?</h2>
            <div className='flex justify-evenly w-full gap-x-8'>
                <div className='w-96 h-full p-[1px]'
                    style={{
                        backgroundImage: 'linear-gradient(0deg, #63D2C5 -2.28%, #FFFFFF 106.25%)',
                        borderRadius: '0.8rem',
                    }}>
                    <div className='w-full h-full rounded-xl bg-white shadow-lg py-8 px-16 flex flex-col items-center justify-between gap-6'>
                        <h3 className='text-3xl font-semibold'>Open Mon-Fri</h3>
                        <svg width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.5 101.292C82.5809 101.292 101.292 82.5816 101.292 59.5007C101.292 36.4198 82.5809 17.709 59.5 17.709C36.4191 17.709 17.7084 36.4198 17.7084 59.5007C17.7084 82.5816 36.4191 101.292 59.5 101.292Z" stroke="black" stroke-width="4.5" />
                            <path d="M81.625 59.5003H60.7292C60.4032 59.5003 60.0906 59.3708 59.86 59.1403C59.6295 58.9098 59.5 58.5972 59.5 58.2712V42.292" stroke="black" stroke-width="4.5" stroke-linecap="round" />
                        </svg>
                        <p className='text-2xl'>08:00 to 18:00</p>
                    </div>
                </div>
                <div className='w-96 h-full p-[1px]'
                    style={{
                        backgroundImage: 'linear-gradient(0deg, #63D2C5 -2.28%, #FFFFFF 106.25%)',
                        borderRadius: '0.9rem',
                    }}>
                    <div className='w-full h-full rounded-xl bg-white shadow-lg py-8 px-16 flex flex-col items-center justify-between'>
                        <h3 className='text-3xl font-semibold'>Let’s Talk</h3>
                        <div className='space-y-6 mt-28'>
                            <p className='text-2xl flex items-center gap-4'>
                                <svg className='inline' width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 22.5C6.36739 22.5 6.24021 22.5527 6.14645 22.6464C6.05268 22.7402 6 22.8674 6 23C6 23.1326 6.05268 23.2598 6.14645 23.3536C6.24021 23.4473 6.36739 23.5 6.5 23.5H11.5C11.6326 23.5 11.7598 23.4473 11.8536 23.3536C11.9473 23.2598 12 23.1326 12 23C12 22.8674 11.9473 22.7402 11.8536 22.6464C11.7598 22.5527 11.6326 22.5 11.5 22.5H6.5ZM3.25 0.5C2.38805 0.5 1.5614 0.84241 0.951903 1.4519C0.34241 2.0614 0 2.88805 0 3.75V25.25C0 26.112 0.34241 26.9386 0.951903 27.5481C1.5614 28.1576 2.38805 28.5 3.25 28.5H14.75C15.612 28.5 16.4386 28.1576 17.0481 27.5481C17.6576 26.9386 18 26.112 18 25.25V3.75C18 2.88805 17.6576 2.0614 17.0481 1.4519C16.4386 0.84241 15.612 0.5 14.75 0.5H3.25ZM1 3.75C1 3.15326 1.23705 2.58097 1.65901 2.15901C2.08097 1.73705 2.65326 1.5 3.25 1.5H14.75C15.3467 1.5 15.919 1.73705 16.341 2.15901C16.7629 2.58097 17 3.15326 17 3.75V25.25C17 25.8467 16.7629 26.419 16.341 26.841C15.919 27.2629 15.3467 27.5 14.75 27.5H3.25C2.65326 27.5 2.08097 27.2629 1.65901 26.841C1.23705 26.419 1 25.8467 1 25.25V3.75Z" fill="black" />
                                </svg>
                                +372 5556 56 88
                            </p>
                            <p className='text-2xl flex items-center gap-4'>
                                <svg className='inline' width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 22.5C6.36739 22.5 6.24021 22.5527 6.14645 22.6464C6.05268 22.7402 6 22.8674 6 23C6 23.1326 6.05268 23.2598 6.14645 23.3536C6.24021 23.4473 6.36739 23.5 6.5 23.5H11.5C11.6326 23.5 11.7598 23.4473 11.8536 23.3536C11.9473 23.2598 12 23.1326 12 23C12 22.8674 11.9473 22.7402 11.8536 22.6464C11.7598 22.5527 11.6326 22.5 11.5 22.5H6.5ZM3.25 0.5C2.38805 0.5 1.5614 0.84241 0.951903 1.4519C0.34241 2.0614 0 2.88805 0 3.75V25.25C0 26.112 0.34241 26.9386 0.951903 27.5481C1.5614 28.1576 2.38805 28.5 3.25 28.5H14.75C15.612 28.5 16.4386 28.1576 17.0481 27.5481C17.6576 26.9386 18 26.112 18 25.25V3.75C18 2.88805 17.6576 2.0614 17.0481 1.4519C16.4386 0.84241 15.612 0.5 14.75 0.5H3.25ZM1 3.75C1 3.15326 1.23705 2.58097 1.65901 2.15901C2.08097 1.73705 2.65326 1.5 3.25 1.5H14.75C15.3467 1.5 15.919 1.73705 16.341 2.15901C16.7629 2.58097 17 3.15326 17 3.75V25.25C17 25.8467 16.7629 26.419 16.341 26.841C15.919 27.2629 15.3467 27.5 14.75 27.5H3.25C2.65326 27.5 2.08097 27.2629 1.65901 26.841C1.23705 26.419 1 25.8467 1 25.25V3.75Z" fill="black" />
                                </svg>
                                +372 5871 23 38
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-96 h-full p-[1px]'
                    style={{
                        backgroundImage: 'linear-gradient(0deg, #63D2C5 -2.28%, #FFFFFF 106.25%)',
                        borderRadius: '0.8rem',
                    }}>
                    <div className='w-full h-full rounded-xl bg-white shadow-lg py-8 px-16 flex flex-col items-center justify-between space-y-8'>
                        <h3 className='text-3xl font-semibold'>Drop us an Email</h3>
                        <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M91.875 39.3766V78.7516C91.875 82.2325 90.4922 85.5709 88.0308 88.0323C85.5694 90.4938 82.231 91.8766 78.75 91.8766H21.875C18.394 91.8766 15.0556 90.4938 12.5942 88.0323C10.1328 85.5709 8.75 82.2325 8.75 78.7516V39.3766C8.75 34.5203 11.375 30.2766 15.3125 28.0016L50.3125 7.78906L85.3125 28.0016C89.25 30.2766 91.875 34.5203 91.875 39.3766ZM16.275 32.6828L50.3125 54.6891L84.35 32.6828L50.3125 12.8203L16.275 32.6828ZM50.3125 59.9828L13.6938 36.2266C13.3438 37.1891 13.125 38.2828 13.125 39.3766V78.7516C13.125 81.0722 14.0469 83.2978 15.6878 84.9387C17.3288 86.5797 19.5544 87.5016 21.875 87.5016H78.75C81.0706 87.5016 83.2962 86.5797 84.9372 84.9387C86.5781 83.2978 87.5 81.0722 87.5 78.7516V39.3766C87.5 38.2828 87.2812 37.1891 86.9313 36.2266L50.3125 59.9828Z" fill="black" />
                        </svg>
                        <p className='text-2xl'>info@Itmed.eu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsSection