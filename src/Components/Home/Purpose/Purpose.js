import React from 'react';

const Purpose = () => {
    return (
        <div className='grid md:grid-cols-2 text-white'>
            <div className='bg-purpose-bg1 bg-no-repeat bg-left'>
                <div className='bg-[#FF5400] opacity-80 p-20'>
                    <h3 className='text-2xl'>ARE YOU LOOKING FOR A CAR?</h3>
                    <p>Search your car in our Inventory and request a quote on the vehicle of your choosing.</p>
                </div>
            </div>
            <div className='bg-purpose-bg2 bg-no-repeat bg-right'>
                <div className='bg-gray-800 opacity-80 p-20'>
                    <h3 className='text-2xl'>DO YOU WANT TO SELL YOUR CAR?</h3>
                    <p>Would you like to sell your car? Let us help you with professional marketer.</p>
                </div>
            </div>
        </div>
    );
};

export default Purpose;