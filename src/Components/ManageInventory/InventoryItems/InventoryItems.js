import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const InventoryItems = () => {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState('');

    useEffect(() => {
        fetch('https://auto-shoroom.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data.cars));
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
        setRefresh(id)
    }

    return (
        <div className="max-w-7xl mx-auto mt-10">
            <Helmet>
                <title>Manage Inventory - Auto Showroom</title>
            </Helmet>
            <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Image
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Product Name
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Quantity
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Suplier
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Price
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Edit
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {cars.length ?
                                        cars.map(car => {
                                            return <tr key={car._id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <td className="p-4 w-4">
                                                    <div className="flex items-center">
                                                        <img src={car.image} alt="" />
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{car.name}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{car.quantity}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{car.suplier}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${car.price}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <button onClick={() => navigate(`/manageInventory/${car._id}`)} className="text-blue-600 dark:text-blue-500 hover:underline">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <button onClick={() => handleDeleteCar(car._id)} className="text-red-600 dark:text-red-500 hover:underline">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        }) : <Loading />
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;