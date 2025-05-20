import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className='max-w-7xl mx-auto min-h-screen p-4 md:p-0'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;