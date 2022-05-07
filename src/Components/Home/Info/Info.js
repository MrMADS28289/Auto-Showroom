import React from 'react';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 bg-Info-style bg-opacity-50 p-10 text-white mx-auto justify-center items-center'>
            <div className='m-5 border-b-2 md:border-b-0 md:border-r-2 border-[#FF5400] pr-3'>
                <h1 className='text-2xl md:text-5xl font-bold'>987</h1>
                <p className='md:text-2xl mt-3'>HAPPY CLIENTS</p>
            </div>
            <div className='m-5 border-b-2 md:border-b-0 md:border-r-2 border-[#FF5400] pr-3'>
                <h1 className='text-2xl md:text-5xl font-bold'>2342</h1>
                <p className='md:text-2xl mt-3'>VEHICLES IN STOCK</p>
            </div>
            <div className='m-5 border-b-2 md:border-b-0 md:border-r-2 border-[#FF5400] pr-3'>
                <h1 className='text-2xl md:text-5xl font-bold'>567</h1>
                <p className='md:text-2xl mt-3'>AWARDS</p>
            </div>
            <div className='m-5 border-b-2 md:border-b-0 md:border-0 pr-3 border-[#FF5400]'>
                <h1 className='text-2xl md:text-5xl font-bold'>85</h1>
                <p className='md:text-2xl mt-3'>DEALER BRANCHES</p>
            </div>
        </div>
    );
};

export default Info;