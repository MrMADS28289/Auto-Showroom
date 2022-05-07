import React from 'react';
import Banner from './Banner/Banner';
import Company from './Company/Company';
import Info from './Info/Info';
import NewCar from './NewCar/NewCar';
import Offer from './Offer/Offer';
import Purpose from './Purpose/Purpose';
import Team from './Team/Team';
import OurInventory from './OurInventory/OurInventory'
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='m-0 p-0'>
            <Helmet>
                <title>Home - Auto Showroom</title>
            </Helmet>
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