import React from 'react';
// import { ActiveLink } from 'react-router-dom';
import logo from '../../../images/logo/logo1.png'
import ActiveLink from './ActiveLink';

const NavBar = () => {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#151515] mb-0">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <ActiveLink className="leading-relaxed inline-block mr-4" to="/">
                        <img src={logo} alt="" />
                    </ActiveLink>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)} >
                        {
                            !navbarOpen ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        }
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger" >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <ActiveLink
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/home">
                                HOME
                            </ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/inventory">
                                INVENTORY
                            </ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/blogs">
                                BLOGS
                            </ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/login">
                                LOGIN/Regester
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;