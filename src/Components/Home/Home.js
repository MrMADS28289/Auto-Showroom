import React from 'react';
import Banner from './Banner/Banner';
import Company from './Company/Company';
import Info from './Info/Info';
import NewCar from './NewCar/NewCar';
import Offer from './Offer/Offer';
import Purpose from './Purpose/Purpose';
import Team from './Team/Team';
import OurInventory from './OurInventory/OurInventory'

const Home = () => {
    return (
        <div className='m-0 p-0'>
            <Banner />
            <Offer />
            <NewCar />
            <Company />
            <Info />
            <OurInventory />
            <Team />
            <Purpose />
        </div>
    );
};

export default Home;