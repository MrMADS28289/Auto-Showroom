import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import car1 from '../../../images/car/car.jpg'
import car2 from '../../../images/car/super-car.png'
import car3 from '../../../images/car/super-car-2.jpg'
import car4 from '../../../images/car/car12.jpg'
import car5 from '../../../images/car/car11.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel infiniteLoop={true} stopOnHover={false} showThumbs={false} showArrows={true}>
                <div>
                    <img className='h-[60vw]' src={car1} alt='' />
                    <div className="legend">
                        <div className='border-l-4 w-2/6 mx-auto border-orange-500'>
                            <p className='text-lg text-orange-500'>MERCEDES BENZ <span className='text-white'>SLS AMG</span></p>
                            <p>MSRP <span className='text-xl text-orange-500'>$221,580*</span></p>
                        </div>
                        <p className='p-6'>Mercedes-Benz SLS AMG Coupé Electric Drive. · Drive Four electric motors · Fuel Battery · Output 552 kw / 750 PS · Top speed 250 km/h / 155 mph · Range 250 km / 155 ...</p>
                        <button className='w-1/3 bg-[#FF5400] hover:bg-[#FF4400] text-white rounded-md py-2'>LEARN MORE</button>
                    </div>
                </div>
                <div>
                    <img className='h-[60vw]' src={car2} alt='' />
                    <div className="legend">
                        <div className='border-l-4 w-2/6 mx-auto border-orange-500'>
                            <p className='text-lg text-orange-500'>2016 LAMBORGHINI <span className='text-white'>IS 200T FSPORT</span></p>
                            <p>MSRP FROM <span className='text-xl text-orange-500'>$440,870*</span></p>
                        </div>
                        <p className='p-6'>2016 LAMBORGHINI IS 200T FSPORT Electric Drive. · Drive Four electric motors · Fuel Battery · Output 552 kw / 750 PS · Top speed 250 km/h / 155 mph · Range 250 km / 155 ...</p>
                        <button className='w-1/3 bg-[#FF5400] hover:bg-[#FF4400] text-white rounded-md py-2'>LEARN MORE</button>
                    </div>
                </div>
                <div>
                    <img className='h-[60vw]' src={car3} alt='' />
                    <div className="legend">
                        <div className='border-l-4 w-2/6 mx-auto border-orange-500'>
                            <p className='text-lg text-orange-500'>2016 LAMBORGHINI <span className='text-white'>IS 200T FSPORT</span></p>
                            <p>MSRP FROM <span className='text-xl text-orange-500'>$440,870*</span></p>
                        </div>
                        <p className='p-6'>2016 LAMBORGHINI IS 200T FSPORT Electric Drive. · Drive Four electric motors · Fuel Battery · Output 552 kw / 750 PS · Top speed 250 km/h / 155 mph · Range 250 km / 155 ...</p>
                        <button className='w-1/3 bg-[#FF5400] hover:bg-[#FF4400] text-white rounded-md py-2'>LEARN MORE</button>
                    </div>
                </div>
                <div>
                    <img className='h-[60vw]' src={car4} alt='' />
                    <div className="legend">
                        <div className='border-l-4 w-2/6 mx-auto border-orange-500'>
                            <p className='text-lg text-orange-500'>2016 LAMBORGHINI <span className='text-white'>IS 200T FSPORT</span></p>
                            <p>MSRP FROM <span className='text-xl text-orange-500'>$440,870*</span></p>
                        </div>
                        <p className='p-6'>2016 LAMBORGHINI IS 200T FSPORT Electric Drive. · Drive Four electric motors · Fuel Battery · Output 552 kw / 750 PS · Top speed 250 km/h / 155 mph · Range 250 km / 155 ...</p>
                        <button className='w-1/3 bg-[#FF5400] hover:bg-[#FF4400] text-white rounded-md py-2'>LEARN MORE</button>
                    </div>
                </div>
                <div>
                    <img className='h-[60vw]' src={car5} alt='' />
                    <div className="legend">
                        <div className='border-l-4 w-2/6 mx-auto border-orange-500'>
                            <p className='text-lg text-orange-500'>MERCEDES BENZ <span className='text-white'>SLS AMG</span></p>
                            <p>MSRP <span className='text-xl text-orange-500'>$221,580*</span></p>
                        </div>
                        <p className='p-6'>Mercedes-Benz SLS AMG Coupé Electric Drive. · Drive Four electric motors · Fuel Battery · Output 552 kw / 750 PS · Top speed 250 km/h / 155 mph · Range 250 km / 155 ...</p>
                        <button className='w-1/3 bg-[#FF5400] hover:bg-[#FF4400] text-white rounded-md py-2'>LEARN MORE</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;