import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../images/icon/google.png';
import facebook from '../../images/icon/facebook.png';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
import { Helmet } from 'react-helmet-async';

const Regester = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [error3, setError3] = useState('');
    // const [agree, setAgree] = useState(false);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user1, loading1, error1,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);

    if (error || error1 || error2) {
        toast.error(error?.message || error1?.message || error2?.message);
    }
    if (loading || loading1 || loading2) {
        return <Loading />
    }
    if (user?.user?.email || user1?.user?.email || user2?.user?.email) {
        toast.success('Welcome To Aouto Showroom');
        navigate(from, { replace: true });
    }

    const handleCreateUserWithEmailPassword = (e) => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password.length < 6) {
            return setError3('Password must be 6 carecter.');
        }
        if (password !== confirmPassword) {
            return setError3('Password not match.');
        }
        else {
            setError3('');
            createUserWithEmailAndPassword(email, password);
            e.target.reset();
        }

    }

    return (
        <div>
            <Helmet>
                <title>Regester - Auto Showroom</title>
            </Helmet>
            <div className='bg-login-style pb-10'>
                <h3 className='text-gray-500 pt-5 text-center'>Already have an account?</h3>
                <div className='flex items-center justify-center mt-4 mb-9'>
                    <button onClick={() => navigate('/login')} className='font-bold flex justify-center items-center text-[#FF5400] mx-4 text-3xl'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg> Login</button>
                    <div>
                        <div className='border-t-2 border-[#FF5400] w-16'></div>
                        <div className='border-b-2 border-[#FF5400] w-8 mt-3'></div>
                    </div>
                </div>
                <div className='w-full md:w-2/3 mx-auto bg-gray-900 opacity-80 border-2 border-[#FF5400] p-11 rounded-md'>
                    <form onSubmit={handleCreateUserWithEmailPassword} className='flex flex-col text-white'>
                        <label className='text-[#FF5400]' htmlFor="Name">Name</label>
                        <input className='border-0 border-b-2 bg-transparent border-[#FF5400] my-4' type="text" name='name' required />
                        <label className='text-[#FF5400]' htmlFor="Email">Email</label>
                        <input className='border-0 border-b-2 bg-transparent border-[#FF5400] my-4' type="email" name='email' required />
                        <label className='text-[#FF5400]' htmlFor="Password">Password</label>
                        <input type='password' name='password' className='border-b-2 bg-transparent border-[#FF5400] my-4' required />
                        <label className='text-[#FF5400]' htmlFor="Confirm Password">Confirm Password</label>
                        <input type='password' name='confirmPassword' className='border-b-2 bg-transparent border-[#FF5400] mb-10 my-4' required />
                        <p className='mb-6 text-red-600'>{error3}</p>
                        {/* onClick={() => setAgree(!agree)}  */}
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-[#FF5400]">I agree with the <button href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</button>.</label>
                        </div>
                        {/* disabled={agree} */}
                        <input className='bg-[#FF5400] hover:bg-[#FF4400] text-white w-2/3 mx-auto mb-6 p-2 px-5 rounded-md cursor-pointer' type="submit" value="Regester" />
                    </form>
                    <div className='flex justify-center items-center mt-6 text-[#FF5400]'>
                        <div className='border-b-2 border-[#FF5400] w-2/6 mr-2'></div>
                        or
                        <div className='border-b-2 border-[#FF5400] w-2/6 ml-2'></div>
                    </div>
                    <div className='mt-12'>
                        <button onClick={() => signInWithGoogle()} className='flex items-center w-2/3 mx-auto my-5 bg-white hover:bg-gray-300 text-[#FF5400] rounded-md p-3'><img className='h-4 md:h-8' src={google} alt="" /><p className='text-sm md:text-xl text-[#FF5400] ml-3'>Regester With Google.</p></button>
                        <button onClick={() => signInWithFacebook()} className='flex items-center my-5 bg-[#0034C2] hover:bg-blue-900 w-2/3 mx-auto rounded-md p-3'><img className='h-4 md:h-8' src={facebook} alt="" /><p className='text-sm md:text-xl text-white ml-3'>Regester With Facebook.</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Regester;