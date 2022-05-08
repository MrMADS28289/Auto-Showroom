import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return <div className='flex flex-col bg-login-style'>
            <div className='w-full md:w-1/2 mx-auto flex flex-col justify-center items-center my-24 bg-gray-900 opacity-80 border-2 border-[#FF5400] p-11 rounded-md'>
                <p className='text-red-600 text-sm md:text-3xl'>Your email not verifyed.</p>
                <p className='text-green-600 text-sm md:text-xl'>Please Verify your email.</p>
                <button
                    className='bg-[#FF5400] hover:bg-[#FF3400] text-white rounded-md p-2 my-4'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast.success('Verify Email Sent');
                    }}
                >
                    Sent Verify Email
                </button>
            </div>
        </div>
    }

    return children;
};

export default RequireAuth;