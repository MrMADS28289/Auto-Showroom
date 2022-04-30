import React from 'react';

const Car = ({ car }) => {
    console.log(car);
    return (
        <div className='w-[300px] bg-gray-100 m-6 border-2 shadow-md'>
            <img className='w-[300px] h-[200px]' src={car.image} alt="" />
            <div className='p-4'>
                <h1 className='border-l-2 my-4 border-[#FF5400] pl-2 font-bold'>{car.name}</h1>
                <h1 className='font-bold'>Suplier: {car.suplier}</h1>
                <p className='font-bold mt-1'>$ <span className='text-[#FF5400]'>{car.price}</span></p>
                <p className='my-2'>{car.description}</p>
                <button className='bg-[#FF5400] hover:bg-[#FF4400] text-white w-[100%]  rounded-md py-2'>MANAGE</button>
            </div>
        </div>
    );
};

export default Car;