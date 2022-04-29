import React from 'react';

const Info = () => {
    return (
        <div className='flex bg-Info-style bg-opacity-50 p-10 text-white mx-auto justify-center items-center'>
            <div className='m-5 border-r-2 border-[#FF5400] pr-3'>
                <h1 className='text-5xl font-bold'>987</h1>
                <p className='text-2xl mt-3'>HAPPY CLIENTS</p>
            </div>
            <div className='m-5 border-r-2 border-[#FF5400] pr-3'>
                <h1 className='text-5xl font-bold'>2342</h1>
                <p className='text-2xl mt-3'>VEHICLES IN STOCK</p>
            </div>
            <div className='m-5 border-r-2 border-[#FF5400] pr-3'>
                <h1 className='text-5xl font-bold'>567</h1>
                <p className='text-2xl mt-3'>AWARDS</p>
            </div>
            <div className='m-5 pr-3'>
                <h1 className='text-5xl font-bold'>85</h1>
                <p className='text-2xl mt-3'>DEALER BRANCHES</p>
            </div>
        </div>
    );
};

export default Info;