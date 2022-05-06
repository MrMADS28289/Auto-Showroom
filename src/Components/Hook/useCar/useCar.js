import { useEffect, useState } from 'react';

const useCar = (limit, pageNumber) => {

    const [cars, setCars] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:5000/cars?limit=${limit}&pageNumber=${pageNumber}`)
            .then(res => res.json())
            .then(data => {
                setCars(data.cars)
                setPageCount(data.count / limit);
            });
    }, [limit, pageNumber])

    return [cars, pageCount];
};

export default useCar;