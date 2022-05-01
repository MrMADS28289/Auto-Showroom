import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const InventoryItems = () => {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState('');

    useEffect(() => {
        fetch('https://auto-shoroom.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data));
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
                                    {
                                        cars.map(car => {
                                            return <tr key={car._id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <td className="p-4 w-4">
                                                    <div className="flex items-center">
                                                        <img src={car.image} alt="" />
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{car.name}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{car.suplier}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${car.price}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <button onClick={() => navigate(`/manageInventory/${car._id}`)} className="text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <button onClick={() => handleDeleteCar(car._id)} className="text-red-600 dark:text-red-500 hover:underline">Delete</button>
                                                </td>
                                            </tr>
                                        })
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