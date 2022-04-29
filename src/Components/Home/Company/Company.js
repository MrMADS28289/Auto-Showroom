import React from 'react';
import { Slide } from 'react-reveal';
import audi from '../../../images/logo/carlogo/audi.png';
import bmw from '../../../images/logo/carlogo/bmw.png';
import cropped from '../../../images/logo/carlogo/cropped.png';
import ford from '../../../images/logo/carlogo/ford.png';
import honda from '../../../images/logo/carlogo/honda.png';
import jaguar from '../../../images/logo/carlogo/jaguar.png';
import kia from '../../../images/logo/carlogo/kia.png';
import lexus from '../../../images/logo/carlogo/lexus.png';
import mazda from '../../../images/logo/carlogo/mazda.png';
import mercedes from '../../../images/logo/carlogo/mercedes.png';
import toyota from '../../../images/logo/carlogo/toyota.png';

const Company = () => {
    return (
        <div>
            <h1 className='text-2xl text-center my-6 border-b-4 border-[#FF5400]'>BROWSE BY MAKE</h1>
            <div className='w-2/3 mx-auto grid md:grid-cols-3 justify-center mb-6'>
                <Slide right>
                    <div className='flex items-center mr-5'>
                        <img className='h-16' src={audi} alt="" />
                        <p>Audi(6)</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className='flex items-center mr-5'>
                        <img className='h-16' src={bmw} alt="" />
                        <p>BMW(4)</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className='flex items-center mr-5'>
                        <img className='h-16' src={cropped} alt="" />
                        <p>Cropped(11)</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className='flex items-center mr-5'>
                        <img className='h-16' src={ford} alt="" />
                        <p>Ford(9)</p>
                    </div>
                </Slide>
                <Slide left>
                    <div className='flex items-center mr-5'>
                        <img className='h-16' src={honda} alt="" />
                        <p>Honda(3)</p>
                    </div>
                </Slide>
                <Slide left>
                    <div className='flex items-center mr-5'>
                        <img className='h-16' src={jaguar} alt="" />
                        <p>Jaguar(5)</p>
                    </div>
                </Slide>
                <Slide left>
                    <div className='flex items-center mr-5'>
                        <img className='h-16' src={kia} alt="" />
                        <p>Kia(44)</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className='flex items-center mr-5'>
                        <img className='h-16' src={lexus} alt="" />
                        <p>Lexus(8)</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className='flex items-center mr-5'>
                        <img className='h-16' src={mazda} alt="" />
                        <p>Mazda(19)</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className='flex items-center mr-5'>
                        <img className='h-16' src={mercedes} alt="" />
                        <p>Mercedes(5)</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className='flex items-center mr-5'>
                        <img className='h-16' src={toyota} alt="" />
                        <p>Toyota(7)</p>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Company;