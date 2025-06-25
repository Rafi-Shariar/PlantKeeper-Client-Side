import React from "react";
import bannerImg from "../../assets/Banner/Banner 2.jpg";
const SlideTwo = () => {
  return (
   <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 md:p-10 rounded-2xl max-w-6xl mx-auto mt-10 border border-green-400 bg-green-50 shadow-md lg:h-[400px]">
  {/* Text Section */}
  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
    <h1 className="text-3xl md:text-4xl text-green-700 font-extrabold leading-snug">
      Plant Variety Spotlight
    </h1>
    <p className="text-base md:text-lg text-gray-700">
      Whether you're a beginner or a green thumb, there’s a perfect plant for you.
    </p>
    <p className="text-base md:text-lg text-gray-800 font-medium">
      🪴 <strong>Snake Plant</strong> – Low maintenance <br />
      🌿 <strong>Pothos</strong> – Grows fast & purifies air <br />
      🌸 <strong>Peace Lily</strong> – Beautiful and forgiving
    </p>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={bannerImg}
      alt="Plant Varieties"
      className="w-full max-w-sm md:max-w-md lg:max-w-full rounded-3xl shadow-xl object-cover"
    />
  </div>
</div>


  );
};

export default SlideTwo;
