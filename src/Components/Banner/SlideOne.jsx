import React from "react";
import bannerImg from "../../assets/Banner/Banner1.jpg";

const SlideOne = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 md:p-10 rounded-2xl max-w-6xl mx-auto  border border-green-400 bg-green-50 shadow-md h-[500px] md:h-[400px]">
  {/* Text Section */}
  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
    <h1 className="text-3xl md:text-4xl text-green-700 font-extrabold leading-snug">
      Right Time, Right Water
    </h1>
    <p className="text-base md:text-lg text-gray-700">
      🌱 Did you know? Early morning is the best time to water your plants. It helps them absorb moisture before the day gets hot.
    </p>
    <p className="text-base md:text-lg text-gray-800 font-medium">
      💧 <strong>Tip:</strong> Check the soil — if it’s dry an inch below the surface, it’s time to water!
    </p>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={bannerImg}
      alt="Watering Plants"
      className="w-full max-w-sm md:max-w-md lg:max-w-full rounded-3xl shadow-xl object-cover"
    />
  </div>
</div>

  );
};

export default SlideOne;
