import React from 'react';
import Banner from './Banner/Banner';
import Company from './Company/Company';
import Info from './Info/Info';
import Offer from './Offer/Offer';
import OurInventory from './OurInventory/OurInventory';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Banner />
            <Offer />
            <OurInventory />
            <Company />
            <Info />
            <Team />
        </div>
    );
};

export default Home;