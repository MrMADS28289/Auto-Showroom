import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCar from '../../Hook/useCar/useCar';
import Car from '../../Inventory/Car/Car';

const OurInventory = () => {

    const [cars] = useCar();
    const navigate = useNavigate();

    return (
        <div>
            <h1 className='text-2xl text-center my-6 font-bold'>Our Inventory</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center'>
                {
                    cars.slice(0, 3).map(car => <Car key={car._id} car={car} />)
                }
            </div>
            <button
                onClick={() => navigate('/inventory')}
                className='flex items-center justify-center w-1/6 my-10 mx-auto'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>See All</button>
        </div>
    );
};

export default OurInventory;