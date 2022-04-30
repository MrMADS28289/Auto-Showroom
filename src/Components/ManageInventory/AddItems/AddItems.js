import React from 'react';

const AddItems = () => {
    return (
        <div>
            <form className='flex flex-col bg-[#151515] mt-10 p-6 rounded-2xl'>

                <label className='text-white' htmlFor="Nme">Name</label>
                <input className='rounded-3xl p-2 my-4' type="Name" name='Name' />

                <label className='text-white' htmlFor="SupplierName">Supplier Name</label>
                <input className='rounded-3xl p-2 my-4' name='suppliername' type='text' />

                <label className='text-white' htmlFor="Price">Price</label>
                <input className='rounded-3xl p-2 my-4' name='price' type='number' />

                <label className='text-white mb-2' htmlFor="description">Description</label>
                <textarea className='rounded-3xl p-3 my-4' name="description" id="" cols="30" rows="2"></textarea>

                <label className='text-white' htmlFor="Quantity">Quantity</label>
                <input className='rounded-3xl p-2 my-4' name='quantity' type='number' />
                <label className='text-white' htmlFor="image">Image Url</label>
                <input className='rounded-3xl p-2 my-4' name='image' type='text' />

                <input className='bg-[#FF5400] hover:bg-[#FF4400] text-black w-2/3 mx-auto p-2 px-5 rounded-md cursor-pointer' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;