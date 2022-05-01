import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateCar = () => {

    const { id } = useParams();
    const [car, setCar] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://auto-shoroom.herokuapp.com/cars/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [id])

    const handleUpdateCar = (e) => {

        e.preventDefault();

        const name = e.target.Name.value;
        const suplier = e.target.suppliername.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;
        const image = e.target.image.value;

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

        e.target.reset();
        toast.success('Updated')
        navigate(-1)
    }


    return (
        <div className='w-3/5 mx-auto my-6'>
            <h1 className='text-2xl text-center'>Edit Item</h1>
            <form onSubmit={handleUpdateCar} className='flex flex-col bg-[#151515] mt-10 p-6 rounded-2xl'>

                <label className='text-white' htmlFor="Nme">Name</label>
                <input className='rounded-3xl p-2 my-4' type="Name" name='Name' re placeholder={car?.name} required />

                <label className='text-white' htmlFor="SupplierName">Supplier Name</label>
                <input className='rounded-3xl p-2 my-4' name='suppliername' type='text' placeholder={car?.suplier} required />

                <label className='text-white' htmlFor="Price">Price</label>
                <input className='rounded-3xl p-2 my-4' name='price' type='number' placeholder={car?.price} required />

                <label className='text-white mb-2' htmlFor="description">Description</label>
                <textarea className='rounded-3xl p-3 my-4' name="description" id="" cols="30" rows="2" placeholder={car?.description} required></textarea>

                <label className='text-white' htmlFor="Quantity">Quantity</label>
                <input className='rounded-3xl p-2 my-4' name='quantity' type='number' placeholder={car?.quantity} required />

                <label className='text-white' htmlFor="image">Image Url</label>
                <input className='rounded-3xl p-2 my-4' name='image' type='text' placeholder={car?.image} required />

                <input className='bg-[#FF5400] hover:bg-[#FF4400] text-black w-2/3 mx-auto p-2 px-5 rounded-md cursor-pointer' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateCar;