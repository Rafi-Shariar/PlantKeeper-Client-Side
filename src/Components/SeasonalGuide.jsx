import React from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import autumn from "../assets/Seasons/autumn.png";
import spring from "../assets/Seasons/spring.png";
import summer from "../assets/Seasons/summer.png";
import winter from "../assets/Seasons/winter.png";
import Lottie from "lottie-react";
import lottieAnimation from '../assets/Lottie/Animation - 1747893608371.json';
const SeasonalGuide = () => {
  return (
    <div>
      
      <h1 className="text-2xl lg:text-4xl mt-16 font-semibold text-primary ">
        <MdOutlineTipsAndUpdates className="inline" /> Seasonal Plant Care Guide
      </h1>
      <p className="font-light text-slate-500 lg:text-lg mt-1">
        Help your plants thrive year-round with seasonal tips tailored for every
        climate shift.
      </p>

     
      {/* Contents */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="w-1/2 mx-auto">
        <Lottie animationData={lottieAnimation} loop={true} />
      </div>

        
         {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-2 mt-10 gap-5">
        {/* spring */}
        <div className="card bg-base-100 shadow-lg p-5">
          <figure>
            <img
              src={spring}
              className="w-[30%]"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-semibold text-lg text-center text-green-800">
             SPRING
            </h2>
            <p className="text-center text-slate-600">
              Best time for repotting, pruning, and fertilizing as plants wake up.
            </p>
           
          </div>
        </div>

        {/* summer */}
        <div className="card bg-base-100 shadow-lg p-5">
          <figure>
            <img
              src={summer}
              className="w-[30%]"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-semibold text-lg text-center text-green-800">
             SUMMER
            </h2>
            <p className="text-center text-slate-600">
              Water more frequently, avoid direct harsh sunlight.
            </p>
           
          </div>
        </div>

         {/* Autumn */}
        <div className="card bg-base-100 shadow-lg p-5">
          <figure>
            <img
              src={autumn}
              className="w-[30%]"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-semibold text-lg text-center text-green-800">
             AUTUMN
            </h2>
            <p className="text-center text-slate-600">
              Begin reducing watering, check for leaf changes.
            </p>
           
          </div>
        </div>

          {/* Winter */}
        <div className="card bg-base-100 shadow-lg p-5">
          <figure>
            <img
              src={winter}
              className="w-[30%]"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-semibold text-lg text-center text-green-800">
             WINTER
            </h2>
            <p className="text-center text-slate-600">
              Move tropicals indoors, minimize watering, maximize sunlight.
            </p>
           
          </div>
        </div>
      </div>

      </div>
    
    </div>
  );
};

export default SeasonalGuide;
