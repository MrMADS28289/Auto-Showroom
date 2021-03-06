import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Car from '../../Inventory/Car/Car';

const MyInventory = () => {

    const [cars, setCars] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://auto-shoroom.herokuapp.com/myinventory?email=${user.email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setCars(data)
                }
                if (data.message === 'Forbidden access') {
                    signOut(auth);
                    navigate('/login');
                    toast.error('Forbidden access (403)')
                }
                if (data.message === 'Unouthorize access') {
                    signOut(auth);
                    navigate('/login');
                    toast.error('Unouthorize access (401)')
                }
            });
    }, [navigate, user])

    return (
        <div className='grid md:grid-cols-2 items-center justify-center'>
            {
                cars?.length ?
                    cars.map(car => <Car key={car._id} car={car} />)
                    :
                    <p className='text-red-600 text-4xl text-center my-10 w-full'>You have to add an Inventory!</p>
            }
        </div>
    );
};

export default MyInventory;