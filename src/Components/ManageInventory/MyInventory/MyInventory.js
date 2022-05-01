import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Car from '../../Inventory/Car/Car';

const MyInventory = () => {

    const [cars, setCars] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/myinventory?email=${user.email}`)
            .then(res => res.json())
            .then(data => setCars(data));
    }, [user])

    return (
        <div className='grid md:grid-cols-2 items-center justify-center'>
            {
                cars.length ?
                    cars.map(car => <Car key={car._id} car={car} />)
                    :
                    <p className='text-red-600 text-4xl text-center my-10 w-full'>You have to add a inventory!</p>
            }
        </div>
    );
};

export default MyInventory;