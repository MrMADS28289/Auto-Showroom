import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo1.png';
import payment from '../../../images/logo/payment.png';
import facebook from '../../../images/icon/facebook.png';
import twetter from '../../../images/icon/twetter.png';
import linkedin from '../../../images/icon/linkedin.png';

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <footer>
            <section className='bg-footer-bg text-white p-6 grid md:grid-cols-4 gap-3 relative'>
                <div>
                    <h1 className='text-2xl font-bold mt-6'>CONTACT INFO</h1>
                    <div className='text-gray-400 my-6'>
                        <p>We support to customize minor request as javascript conflict, css issue, etc. Enjoy the ultimate web design themes. Every layout is super flexible, amazingly powerful and visual by nature.</p>
                        <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>via G. Cesare 87/A 47838 Riccione (RN) Italia</p>
                        <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>+0123456789</p>
                        <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>info@autoshowroom.com</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold my-6'>OUR COMPANY</h1>
                    <div className='flex flex-col text-gray-400 mt-6'>
                        <Link className='mb-4 hover:text-[#FF5400]' to='/termOfUse'>Term of Use</Link>
                        <Link className='mb-4 hover:text-[#FF5400]' to='/aboutUs'>About us</Link>
                        <Link className='mb-4 hover:text-[#FF5400]' to='/PrivacyPolicy'>Privacy Policy</Link>
                        <Link className='mb-4 hover:text-[#FF5400]' to='/ContactUs'>Contact Us</Link>
                        <Link className='mb-4 hover:text-[#FF5400]' to='/OurService'>Our Service</Link>
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='text-2xl font-bold my-6'>OPEN HOURS</h1>
                    <div className='text-gray-400 mb-3'>
                        <h1 className='text-lg text-white'>Sales Department</h1>
                        <p>Mon-Sat : 8:00am - 5:00pm <br /> Sunday is closed</p>
                    </div>
                    <div className='text-gray-400 mb-3'>
                        <h1 className='text-lg text-white'>Service Department</h1>
                        <p>Mon-Sat : 8:00am - 5:00pm <br /> Sunday is closed</p>
                    </div>
                </div>
                <div className='mb-6'>
                    <h1 className='text-2xl font-bold my-6'>NEWSLETTER</h1>
                    <p>We support to customize minor request as javascript conflict, css issue, etc. Enjoy the ultimate web design themes. Every layout is super flexible, amazingly powerful and visual by nature.</p>
                    <input type="email" name="email" id="" />
                    <input className='bg-[#FF5400] mt-2' type="submit" value='Send' />
                </div>
                <div className='bg-[#FF5400] absolute w-2/5 bottom-[-30px] flex justify-center items-center rounded-full p-2 ml-6'>
                    <img className='h-11 rounded-full mr-6 cursor-pointer hover:translate-y-1' src={facebook} alt="" />
                    <img className='h-11 rounded-full mr-6 cursor-pointer hover:translate-y-1' src={twetter} alt="" />
                    <img className='h-11 rounded-full mr-6 cursor-pointer hover:translate-y-1' src={linkedin} alt="" />
                </div>
            </section>
            <section className='bg-[#151515] grid md:grid-cols-2 p-6'>
                <div className='m-6'>
                    <img src={logo} alt="" />
                    <h3 className='text-white mt-4'>All Rights Reserved {date}. &copy; by <span className='text-[#FF5400] cursor-pointer'>AUTO SHOWROOM</span></h3>
                </div>
                <div className='m-6'>
                    <img className='mb-3' src={payment} alt="" />
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75"
                                to="/home">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75"
                                to="/inventory">
                                INVENTORY
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75"
                                to="/blogs">
                                BLOGS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75"
                                to="/login">
                                LOGIN/Regester
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;