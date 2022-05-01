import React from 'react';
import { useNavigate } from 'react-router-dom';

const Car = ({ car }) => {

    const navigate = useNavigate();

    return (
        <div className='w-[300px] bg-gray-100 m-6 border-2 shadow-md'>
            <img className='w-[300px] h-[200px]' src={car.image} alt="" />
            <div className='p-4'>
                <h1 className='border-l-2 my-4 border-[#FF5400] pl-2 font-bold'>{car.name}</h1>
                <h1 className='font-bold'>Suplier: {car.suplier}</h1>
                <p className='my-2'>{car.description}</p>
                <div className='flex justify-between my-3'>
                    <p className='font-bold mt-1'>Price: <span className='text-[#FF5400]'>${car.price}</span></p>
                    <p className='font-bold'>Quantity: {car.quantity}</p>
                </div>
                <button onClick={() => navigate(`/inventory/${car._id}`)} className='bg-[#FF5400] hover:bg-[#FF4400] text-white w-[100%]  rounded-md py-2'>MANAGE</button>
            </div>
        </div>
    );
};

export default Car;