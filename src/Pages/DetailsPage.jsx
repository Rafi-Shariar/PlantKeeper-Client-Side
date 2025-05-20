import React from 'react';
import { useLoaderData } from 'react-router';

// image
// "https://i.ibb.co/KxsC6hQ9/download1.jpg"
// plantname
// "sdf"
// category
// "Succulent"
// carelevel
// "easy"

// waterfrequency
// "sdf"

// lastwaterdate
// "2025-05-01"
// nextwaterdate
// "2025-04-29"
// healthstatus
// "df"

// name
// "dffsds"
// email
// "sdf@asd"
// description
// "sdfsd"
// uploadData
// "2025-05-19"
const DetailsPage = () => {
    const plantData = useLoaderData()
    
    return (
        <div>
            <h1 className='mt-10 text-4xl font-semibold text-green-600'>{plantData?.plantname}</h1>

            <h1 className='text-lg font-semibold text-green-800'>Description : <span className='text-slate-500 font-light'>{plantData.description}</span></h1>
            
            {/* //Data display */}
            <div className='lg:flex justify-around items-center mt-20'>

                <div className='grid grid-cols-1 gap-5'>
                    <h1 className='text-lg font-semibold text-green-800'>Category : <span className='text-slate-500 font-light'>{plantData.category}</span></h1>

                    <h1 className='text-lg font-semibold text-green-800'>Care Level : <span className='text-slate-500 font-light'>{plantData.carelevel}</span></h1>

                    <h1 className='text-lg font-semibold text-green-800'>Watering Frequency : <span className='text-slate-500 font-light'>{plantData.waterfrequency}</span></h1>

                    <h1 className='text-lg font-semibold text-green-800'>Last Watered Date : <span className='text-slate-500 font-light'>{plantData.lastwaterdate}</span></h1>

                    <h1 className='text-lg font-semibold text-green-800'>Next Watered Date : <span className='text-slate-500 font-light'>{plantData.nextwaterdate}</span></h1>

                    <h1 className='text-lg font-semibold text-green-800'>Added By : <span className='text-slate-500 font-light'>{plantData. name}</span></h1>

                    <h1 className='text-lg font-semibold text-green-800'>Email : <span className='text-slate-500 font-light'>{plantData.email}</span></h1>

                    <h1 className='text-lg font-semibold text-green-800 mb-10'>Added At : <span className='text-slate-500 font-light'>{plantData.uploadData}</span></h1>

                </div>

                <div>
                    <img src={plantData.image} alt="" className='w-96'/>
                </div>

            </div>
        </div>
    );
};

export default DetailsPage;