import React from "react";
import bannerImg from "../../assets/Banner/Banner3.jpg";
const SlideThree = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-10 bg-white rounded-xl shadow-md max-w-6xl mx-auto ">
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl text-green-600 font-bold">
          Let the Sunshine In
        </h1>
        <p className="text-base md:text-lg text-slate-700 font-light">
          Light is life for plants! Place sun-loving plants like succulents or
          herbs near south-facing windows.
        </p>
        <p className="text-base md:text-lg text-slate-800">
          <strong>Tip:</strong> Rotate your pots weekly to help them grow evenly
          toward the light.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src={bannerImg}
          alt="Watering Plants"
          className="w-full max-w-md md:max-w-full rounded-3xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default SlideThree;
