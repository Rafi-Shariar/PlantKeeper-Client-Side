import React from "react";
import bannerImg from "../../assets/Banner/Banner1.jpg";

const SlideOne = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-10 bg-white rounded-xl shadow-md max-w-6xl mx-auto">
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl text-green-600 font-bold">
          Right Time, Right Water
        </h1>
        <p className="text-base md:text-lg text-slate-700 font-light">
          Did you know? Early morning is the best time to water your plants. It
          gives them time to absorb moisture before the heat of the day.
        </p>
        <p className="text-base md:text-lg text-slate-800">
          <strong>Tip:</strong> Always check the soil — if it’s dry an inch
          below the surface, it’s time to water!
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

export default SlideOne;
