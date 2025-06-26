import React from 'react';
import leaf from '../assets/leaf.png';
import { Link } from 'react-router';
import { IoAddCircleOutline } from "react-icons/io5";
const NoPlants = () => {
    return (
        <div className='max-w-3xl mx-auto flex flex-col items-center p-10 gap-5 rounded-3xl shadow-xl'>
            
            <div className='flex justify-center'>
                <img src={leaf} alt="" className='w-[30%]'/>
            </div>
            <h1 className='text-2xl font-semibold text-red-600 text-center'>No Plant's In Your Collection !!</h1>
            

            {/* <div>
                <Link to={`addplant`} className='btn bg-green-500 text-white hover:bg-green-900'><IoAddCircleOutline className='text-xl'/>Add Your First Plant</Link>
            </div> */}
        </div>
    );
};

export default NoPlants;