import { useEffect, useState } from 'react';

const useCar = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://auto-shoroom.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return [cars, setCars];
};

export default useCar;