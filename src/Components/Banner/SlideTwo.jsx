import React from "react";
import bannerImg from "../../assets/Banner/Banner 2.jpg";
const SlideTwo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-10 bg-white rounded-xl shadow-md max-w-6xl mx-auto">
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl text-green-600 font-bold">
          Plant Variety Spotlight
        </h1>
        <p className="text-base md:text-lg text-slate-700 font-light">
          Whether you're a beginner or a green thumb, there’s a perfect plant
          for you.
        </p>
        <p className="text-base md:text-lg text-slate-800">
          🪴 Snake Plant – Low maintenance | 🌿 Pothos – Grows fast & purifies
          air | 🌸 Peace Lily – Beautiful and forgiving
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

export default SlideTwo;
