import React from "react";
import bannerImg from "../../assets/Banner/Banner3.jpg";
const SlideThree = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 md:p-10 rounded-2xl max-w-6xl mx-auto mt-10 border border-green-400 bg-green-50 shadow-md lg:h-[400px]">
  {/* Text Section */}
  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
    <h1 className="text-3xl md:text-4xl text-green-700 font-extrabold leading-snug">
      Let the Sunshine In
    </h1>
    <p className="text-base md:text-lg text-gray-700">
      Light is life for plants! Place sun-loving plants like succulents or herbs near south-facing windows.
    </p>
    <p className="text-base md:text-lg text-gray-800 font-medium">
      ☀️ <strong>Tip:</strong> Rotate your pots weekly to help them grow evenly toward the light.
    </p>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={bannerImg}
      alt="Sunlight for Plants"
      className="w-full max-w-sm md:max-w-md lg:max-w-full rounded-3xl shadow-xl object-cover"
    />
  </div>
</div>

  );
};

export default SlideThree;
