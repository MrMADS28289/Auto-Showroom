import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/icon/google.png';
import facebook from '../../images/icon/facebook.png';

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className='bg-login-style pb-10'>
            <div className='h-60 flex items-center justify-center'>
                <button onClick={() => navigate('/regester')} className='font-bold  flex justify-center items-center text-[#FF5400] mx-4 text-3xl'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>Regester</button>
                <div>
                    <div className='border-t-2 border-[#FF5400] w-16'></div>
                    <div className='border-b-2 border-[#FF5400] w-8 mt-3'></div>
                </div>
            </div>
            <div className='w-2/3 mx-auto border-2 border-[#FF5400] p-11 rounded-md'>
                <form className='flex flex-col'>
                    <label htmlFor="Email">Email</label>
                    <input className='border-0 border-b-2 bg-transparent border-[#FF5400] my-4' type="email" name='email' />
                    <label htmlFor="Password">Password</label>
                    <input className='border-b-2 bg-transparent border-[#FF5400] my-4' />
                    <input className='bg-[#FF5400] w-2/3 mx-auto mb-6 p-2 px-5 rounded-md cursor-pointer' type="submit" value="Login" />
                </form>
                <Link className='text-[#FF5400] my-6' to='/'>Lost your password?</Link>
                <div className='flex justify-center items-center mt-6 text-[#FF5400]'>
                    <div className='border-b-2 border-[#FF5400] w-2/6 mr-2'></div>
                    or
                    <div className='border-b-2 border-[#FF5400] w-2/6 ml-2'></div>
                </div>
                <div className='mt-12'>
                    <button className='flex items-center w-2/3 mx-auto my-5 bg-white text-[#FF5400] rounded-md p-3'><img className='h-8' src={google} alt="" /><p className='text-xl text-[#FF5400] ml-3'>Login With Google.</p></button>
                    <button className='flex items-center my-5 bg-[#0034C2] w-2/3 mx-auto rounded-md p-3'><img className='h-8' src={facebook} alt="" /><p className='text-xl text-white ml-3'>Login With Facebook.</p></button>
                </div>
            </div>
        </div>
    );
};

export default Login;