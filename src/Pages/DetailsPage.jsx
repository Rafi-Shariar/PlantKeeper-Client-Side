import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsPage = () => {
    const plantData = useLoaderData();

    const {uploadData,nextwaterdate,lastwaterdate} = plantData;

     const formattedUploadDate = new Date(uploadData).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    });

     const formattedNextWateringDate = new Date(nextwaterdate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    });

     const formattedLastWateringDate = new Date(lastwaterdate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    });

    return (
        <div className="max-w-6xl mx-auto p-6 bg-green-100 rounded-3xl mt-10">
            <h1 className=" text-4xl font-bold text-green-700 text-center">{plantData?.plantname}</h1>

            <p className="text-center text-gray-500 mt-2 ">{plantData.description}</p>
            
            <div className='text-2xl font-semibold text-primary mt-10 mb-3'>Details About <span>{plantData?.plantname}</span></div>
            <div className=" flex flex-col-reverse lg:flex-row items-center gap-10 bg-white shadow-md rounded-2xl p-8  ">

                {/* Details */}
                <div className="flex-1 grid grid-cols-1 gap-4 text-sm sm:text-base">
                
                    <h1 className="text-green-800 font-semibold"> Category: <span className="text-slate-600 font-normal">{plantData.category}</span></h1>

                    <h1 className="text-green-800 font-semibold"> Care Level: <span className="text-slate-600 font-normal">{plantData.carelevel}</span></h1>

                    <h1 className="text-green-800 font-semibold"> Health Status <span className="text-slate-600 font-normal">{plantData.healthstatus}</span></h1>

                    <h1 className="text-green-800 font-semibold"> Watering Frequency: <span className="text-slate-600 font-normal">{plantData.waterfrequency}</span></h1>

                    <h1 className="text-green-800 font-semibold"> Last Watered Date: <span className="text-slate-600 font-normal">{formattedNextWateringDate}</span></h1>

                    <h1 className="text-green-800 font-semibold"> Next Water: <span className="text-slate-600 font-normal">{formattedLastWateringDate}</span></h1>

                    <h1 className="text-green-800 font-semibold"> Added By: <span className="text-slate-600 font-normal">{plantData.name}</span></h1>

                    <h1 className="text-green-800 font-semibold"> Email: <span className="text-slate-600 font-normal">{plantData.email}</span></h1>

                    <h1 className="text-green-800 font-semibold"> Added At: <span className="text-slate-600 font-normal">{formattedUploadDate}</span></h1>
                    
                    
                </div>

                {/* pic */}
                <div className="flex-1 w-full flex justify-center">
                    <img 
                        src={plantData.image} 
                        alt={plantData.plantname} 
                        className="w-full max-w-sm rounded-xl shadow-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};



export default DetailsPage;
