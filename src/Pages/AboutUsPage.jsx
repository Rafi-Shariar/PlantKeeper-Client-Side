import React from 'react';
import aboutImg from '../assets/aboutusImg.png'; // Replace with your actual image path

const AboutUsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">About PlantKeeper</h1>
        <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
          Helping plant lovers around the world grow and care for their plants smarter and easier, every day.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Text */}
        <div className="flex-1 space-y-5">
          <h2 className="text-2xl font-semibold text-green-800">Our Mission</h2>
          <p className="text-slate-700 leading-relaxed">
            At PlantKeeper, our goal is to make plant care simple, fun, and effective. Whether you're a beginner or an experienced gardener,
            we provide intuitive tools to track your plant’s needs, receive timely reminders, and learn how to keep your greens thriving.
          </p>

          <h2 className="text-2xl font-semibold text-green-800">Why We Started</h2>
          <p className="text-slate-700 leading-relaxed">
            We noticed a common struggle: people love plants but often forget when to water, how much light they need, or what care routine to follow.
            That’s why we built PlantKeeper — to bring structure, reminders, and plant knowledge to everyone’s fingertips.
          </p>

          <h2 className="text-2xl font-semibold text-green-800">Built by Nature Lovers</h2>
          <p className="text-slate-700 leading-relaxed">
            We’re a small team of plant enthusiasts, designers, and developers who believe in combining technology with nature for better well-being,
            greener spaces, and a happier world.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="About PlantKeeper"
            className=" rounded-xl shadow-lg object-cover max-h-[500px]"
          />
        </div>
      </div>

      {/* Team or Contact CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-2">Join the PlantKeeper Community</h2>
        <p className="text-slate-600 mb-4">Have questions or want to collaborate? Reach out to us anytime!</p>
        <a
          href="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUsPage;
