import React from "react";
import newsletterimg from "../assets/Banner/newsletterimg.jpg";
//  className="hero h-96 rounded-2xl overflow-hidden"
//         style={{
//           backgroundImage: `url(${newsletterimg})`,
//         }}
const NewsLetter = () => {
  return (
    <div className="mt-20 rounded-2xl">
      <div
        className="hero h-96 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${newsletterimg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center flex flex-col">
          <div className="max-w-md md:max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Get the Green Letter</h1>
            <p className="mb-5">
              Join our plant-loving community. Get monthly tips, seasonal care
              reminders, and more—straight to your inbox!
            </p>

           
          </div>
           <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full pr-24 pl-4 py-3 rounded-full border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-green-800 placeholder-green-600 shadow-sm"
              />

              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200">
                Send
              </button>
            </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default NewsLetter;
