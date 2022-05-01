import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageCar = () => {

    const [car, setCar] = useState([]);
    const { inventoryId } = useParams();
    // const [quantity, setQuantity] = useState(0);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        fetch(`https://auto-shoroom.herokuapp.com/cars/${inventoryId}`)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [inventoryId, refresh])

    const handleAdd = (e) => {
        e.preventDefault();
        const q = e.target.quantity.value;

        const name = car.name;
        const suplier = car.suplier;
        const price = car.price;
        const quantity = car.quantity + Number(q);
        console.log(quantity);
        const description = car.description;
        const image = car.image;

        const updatedCar = { name, suplier, price, quantity, description, image };

        fetch(`https://auto-shoroom.herokuapp.com/cars/${car._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedCar),
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        setRefresh(refresh + 1)
        e.target.reset();
        toast.success('Added success')
    }

    const handleDelevered = (id) => {
        const procced = window.confirm('Are you sure?');

        if (procced) {
            const name = car.name;
            const suplier = car.suplier;
            const price = car.price;
            const quantity = car.quantity - 1;
            const description = car.description;
            const image = car.image;

            const updatedCar = { name, suplier, price, quantity, description, image };

            fetch(`https://auto-shoroom.herokuapp.com/cars/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(updatedCar),
            })
                .then((response) => response.json())
                .then((json) => console.log(json));

            setRefresh(refresh + 1)
            toast.success('Delivery success')
        }
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
                <form onSubmit={handleAdd} className='flex'>
                    <input className='w-11/12 p-2' type="number" name="quantity" id="" />
                    <input type='submit' className='bg-sky-600 mr-1 hover:bg-sky-800 text-white w-[100%]  rounded-md py-2' value='Add' />
                </form>
                <button onClick={() => handleDelevered(car._id)} className='bg-red-600 hover:bg-red-700 text-white w-[100%]  rounded-md my-3 py-2'>Delevered</button>
            </div>
        </div>
    );
};

export default ManageCar;