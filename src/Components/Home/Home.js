import React from 'react';
import Banner from './Banner/Banner';
import Company from './Company/Company';
import Info from './Info/Info';
import Offer from './Offer/Offer';
import OurInventory from './OurInventory/OurInventory';
import Purpose from './Purpose/Purpose';
import Team from './Team/Team';

const Home = () => {
    return (
        <div className='m-0 p-0'>
            <Banner />
            <Offer />
            <OurInventory />
            <Company />
            <Info />
            <Purpose />
            <Team />
        </div>
    );
};

export default Home;