import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import errorImg from '../assets/404-error.png';
import { Link } from 'react-router';
import { IoMdArrowRoundBack } from "react-icons/io";
const PageNotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen'>

                <div className='max-w-4xl mx-auto'>
                    <div className='flex justify-center'>
                        <img src={errorImg} alt="" className='w-[50%]'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <h1 className='text-3xl mt-5 font-light text-green-600'>The Page Does Not Exists !!</h1>
                        <Link to={`/`} className='btn bg-green-400 hover:bg-green-800 hover:text-white'><IoMdArrowRoundBack className='inline mr-2'/>Go Back To Home</Link>
                        
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default PageNotFound;