import React from 'react'
import FormLogin from '../Fragments/FormLogin'
import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {
    const { image, description, judul, children, type } = props;
    return (
        <div className='min-h-screen w-full flex flex-row'>
            <div className='hidden md:w-1/2 bg-[#065ad7] md:flex flex-col justify-center items-center space-y-4'>
                <img src={image} alt="Login" />
                <p className='font-bold text-4xl text-white'>Hello!</p>
                <p className='font-light text-2xl text-white capitalize'>{description}</p>
            </div>

            <div className='md:w-1/2 w-full flex flex-col justify-center items-center'>
                <div className='w-full max-w-xs'>
                    <h1 className='text-3xl font-bold text-blue-600 mb-2'>{judul}</h1>
                    <p className='font-medium text-slate-500 mb-8'>Welcome! Please Enter Your Details</p>
                    {children}
                    <Navigation tipe={type}/>
                    {/* <p className='text-center mt-5 text-sm'>
                        {
                            type === 'login' ? "Dont't Have an Account?" : "Already have an account?"
                        }
                        {
                            type === 'login' && (
                                <Link to="/register" className='font-bold text-blue-500'>{" "}Register</Link>
                            )
                        }
                        {
                            type === 'register' && (
                                <Link to="/login" className='font-bold text-blue-500'>{" "}Login</Link>
                            )
                        }
                    </p> */}

                </div>
            </div>
        </div>
    )
}

const Navigation = ({ tipe }) => {
    if (tipe === 'login') {
        return (
            <p className='text-center mt-5 text-sm'>Dont't Have an Account?
                <Link to="/register" className='font-bold text-blue-500'>{" "}Register</Link>
            </p>

        )
    } else {
        return (
            <p className='text-center mt-5 text-sm'>Already have an account?
                <Link to="/login" className='font-bold text-blue-500'>{" "}Login</Link>
            </p>
        )
    }
}

export default AuthLayouts
