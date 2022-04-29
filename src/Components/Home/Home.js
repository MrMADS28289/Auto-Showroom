import React from 'react';
import Banner from './Banner/Banner';
import Company from './Company/Company';
import Offer from './Offer/Offer';
import OurInventory from './OurInventory/OurInventory';

const Home = () => {
    return (
        <div>
            <Banner />
            <Offer />
            <OurInventory />
            <Company />
        </div>
    );
};

export default Home;