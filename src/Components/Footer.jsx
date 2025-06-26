import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';
const Footer = () => {
    return (
        <div>
             <footer className="bg-primary text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Website Info */}
        <div>
          <div className='flex items-center gap-2'>
            <img src={logo} alt="" className='w-[10%]'/>
            <h2 className="text-3xl font-bold"> PlantKeeper</h2>
          </div>
          <p>Your trusted companion for smart plant care and growth tracking .</p>
        </div>

        {/* Contact Info */}
        <div className='col-span-2 lg:text-center'>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:support@plantpal.com" className="underline">support@plantkeeper.com</a></p>
          <p>Phone: 041-12121212</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-green-800 text-2xl">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="mailto:support@plantpal.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 text-green-700">
        © {new Date().getFullYear()} PlanKeeper. All rights reserved.
      </div>
    </footer>
  
        </div>
    );
};

export default Footer;