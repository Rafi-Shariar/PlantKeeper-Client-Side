import React from "react";
import newsletterimg from "../assets/Banner/newsletterimg.jpg";
const NewsLetter = () => {
  return (
    <div className="mt-20">
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url(${newsletterimg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Get the Green Letter</h1>
            <p className="mb-5">
              Join our plant-loving community. Get monthly tips, seasonal care
              reminders, and more—straight to your inbox!
            </p>

            <div>
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-success text-green-800 placeholder-green-700"
              />

              <button className="btn btn-success">Sent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
