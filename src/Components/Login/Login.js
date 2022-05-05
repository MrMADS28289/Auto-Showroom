import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../images/icon/google.png';
import facebook from '../../images/icon/facebook.png';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user1, loading1, error1,] = useSignInWithEmailAndPassword(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(auth);

    if (error || error1 || error2 || error3) {
        toast.error(error?.message || error1?.message || error2?.message || error3?.message);
    }
    if (loading || loading1 || loading2 || sending) {
        return <Loading />
    }
    if (user || user1 || user2) {
        fetch('https://auto-shoroom.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify({
                email: user?.user?.email || user1?.user?.email || user2?.user?.email
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("accessToken", data?.token)
                toast.success('Welcome To Aouto Showroom');
                navigate(from, { replace: true });
            });
    }

    const handleLoginWithEmailPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        e.target.reset();
    }

    return (
        <div className='bg-login-style pb-10'>
            <h3 className='text-gray-500 pt-5 text-center'>New to Auto Showroom?</h3>
            <div className='flex mt-4 mb-9 items-center justify-center'>
                <button onClick={() => navigate('/regester')} className='font-bold  flex justify-center items-center text-[#FF5400] mx-4 text-3xl'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>Regester</button>
                <div>
                    <div className='border-t-2 border-[#FF5400] w-16'></div>
                    <div className='border-b-2 border-[#FF5400] w-8 mt-3'></div>
                </div>
            </div>
            <div className='w-full md:w-2/3 mx-auto border-2 bg-gray-900 opacity-80 border-[#FF5400] p-11 rounded-md'>
                <form onSubmit={handleLoginWithEmailPassword} className='flex flex-col'>
                    <label className='text-[#FF5400]' htmlFor="Email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='border-0 border-b-2 bg-transparent border-[#FF5400] my-4' type="email" name='email' />
                    <label className='text-[#FF5400]' htmlFor="Password">Password</label>
                    <input className='border-b-2 bg-transparent border-[#FF5400] my-4' name='password' type='password' />
                    <p className='my-6 text-red-800'>{error2}</p>
                    <input className='bg-[#FF5400] hover:bg-[#FF4400] text-white w-2/3 mx-auto mb-6 p-2 px-5 rounded-md cursor-pointer' type="submit" value="Login" />
                </form>
                <button onClick={async () => {
                    await sendPasswordResetEmail(email);
                    toast.success('Sent email');
                }} className='text-[#FF5400] my-6 hover:text-red-500' >Lost your password?</button>
                <div className='flex justify-center items-center mt-6 text-[#FF5400]'>
                    <div className='border-b-2 border-[#FF5400] w-2/6 mr-2'></div>
                    or
                    <div className='border-b-2 border-[#FF5400] w-2/6 ml-2'></div>
                </div>
                <div className='mt-12'>
                    <button onClick={() => signInWithGoogle()} className='flex items-center w-2/3 mx-auto my-5 bg-white hover:bg-gray-300 text-[#FF5400] rounded-md p-3'><img className='h-4 md:h-8' src={google} alt="" /><p className='text-sm md:text-xl text-[#FF5400] ml-3'>Login With Google.</p></button>
                    <button onClick={() => signInWithFacebook()} className='flex items-center my-5 bg-[#0034C2] hover:bg-blue-900 w-2/3 mx-auto rounded-md p-3'><img className='h-4 md:h-8' src={facebook} alt="" /><p className='text-sm md:text-xl text-white ml-3'>Login With Facebook.</p></button>
                </div>
            </div>
        </div>
    );
};

export default Login;