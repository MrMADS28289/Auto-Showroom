import React from 'react';
import Banner from './Banner/Banner';
import NewCar from './NewCar/NewCar';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Offer />
            <NewCar />
        </div>
    );
};

export default Home;