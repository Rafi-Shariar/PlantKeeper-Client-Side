import React from 'react';
import { FaFacebookF, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import logo from '../assets/logo.png';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* 1. Company Details */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="PlantKeeper Logo" className="w-10 h-10 object-contain" />
            <h2 className="text-2xl font-bold">Plant<span className='text-secondary'>Keeper</span></h2>
          </div>
          <p className="text-sm text-green-100 leading-relaxed">
            Your trusted companion for smart plant care, watering reminders, and growth tracking — helping your greens thrive every season.
          </p>
        </div>

        {/* 2. Company Links */}
        <div className='md:col-span-2 flex flex-col items-center'>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm flex flex-col">
            <Link to={'/'} className="hover:underline" href="#">Home</Link>
             <Link to={'/blogs'} className="hover:underline" href="#">Blog</Link>
            <Link to={'/aboutus'} className="hover:underline" href="#">About Us</Link>
            <Link to={`/contact`} className="hover:underline" href="#">Contact</Link>
            
            
           
          </ul>
        </div>

        {/* 3. Legal & Follow Us */}
        <div>
          {/* <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm mb-4">
            <li><a className="hover:underline" href="#">Terms of Use</a></li>
            <li><a className="hover:underline" href="#">Privacy Policy</a></li>
          </ul> */}

          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.facebook.com/rafi.shariar.630040/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF className="hover:text-green-300 transition" />
            </a>
            <a href="https://www.linkedin.com/in/rafi-shariar-231449214/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-green-300 transition" />
            </a>
            <a href="mailto:rafi.shariar619@gmail.com" aria-label="Email">
              <FaEnvelope className="hover:text-green-300 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm text-green-100">
        © {new Date().getFullYear()} PlantKeeper. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
