import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageCar = () => {

    const [car, setCar] = useState([]);
    const { inventoryId } = useParams();
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState('');

    useEffect(() => {
        fetch(`https://auto-shoroom.herokuapp.com/cars/${inventoryId}`)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [refresh])

    const handleDeleteCar = (id) => {

        const procced = window.confirm('Are you Sure?');

        if (procced) {
            fetch(`https://auto-shoroom.herokuapp.com/cars/${id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
            toast.success('Delete seccess')
        }
        navigate(-1)
        setRefresh(id)
    }

    const handleEditCar = (id) => {
        navigate(`/manageInventory/${car._id}`)
        setRefresh(id)
    }

    return (
        <div className='grid md:grid-cols-2 w-[50%] mx-auto bg-gray-100 my-10 border-2 shadow-md'>
            <div>
                <img className='w-full h-full' src={car.image} alt="" />
            </div>
            <div className='p-4'>
                <h1 className='border-l-2 my-4 border-[#FF5400] pl-2 font-bold'>{car.name}</h1>
                <h1 className='font-bold'>Suplier: {car.suplier}</h1>
                <p className='my-2'>{car.description}</p>
                <div className='flex justify-between my-3'>
                    <p className='font-bold mt-1'>Price: <span className='text-[#FF5400]'>${car.price}</span></p>
                    <p className='font-bold'>Quantity: {car.quantity}</p>
                </div>
                <div className='flex'>
                    <button onClick={() => handleEditCar(car._id)} className='bg-sky-600 mr-1 hover:bg-sky-800 text-white w-[100%]  rounded-md py-2'>Edit</button>
                    <button onClick={() => handleDeleteCar(car._id)} className='bg-red-600 hover:bg-red-700 text-white w-[100%]  rounded-md py-2'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageCar;