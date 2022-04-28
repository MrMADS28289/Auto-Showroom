import React from 'react';

const Offer = () => {
    return (
        <div className='bg-[#FF5400] grid md:grid-cols-3 gap-4'>
            <div className='flex m-2 p-4 py-7 justify-center items-center' >
                <div className='bg-[#FF7633] rounded-full p-3 mr-5 text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div className='text-white'>
                    <h3 className='text-lg'>HIGHLY-TRAINED STAFF</h3>
                    <p className='text-sm '>Support is always our highest priority and we provide all around support. </p>
                </div>
            </div>
            <div className='flex m-2 p-4 py-7 justify-center items-center' >
                <div className='bg-[#FF7633] rounded-full p-3 mr-5 text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className='text-white'>
                    <h3 className='text-lg'>FAST & EFFECTIVE SERVICE</h3>
                    <p className='text-sm '>6 months Update & Support but you can extend support to 12 months</p>
                </div>
            </div>
            <div className='flex m-2 p-4 py-7 justify-center items-center' >
                <div className='bg-[#FF7633] rounded-full p-3 mr-5 text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div className='text-white'>
                    <h3 className='text-lg'>SUPPORT 24/7</h3>
                    <p className='text-sm '>We support to customize minor request: javascript conflict, css issue.</p>
                </div>
            </div>
        </div>
    );
};

export default Offer;