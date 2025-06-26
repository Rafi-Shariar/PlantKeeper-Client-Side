import React from 'react';
import { Link } from 'react-router';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';

const DashboardNavbar = ({ toggleSidebar, user}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-green-700 font-bold text-xl md:text-2xl">
          <img src={logo} alt="PlantKeeper Logo" className="w-10 h-10 object-contain" />
          <span>
            Plant<span className="text-green-500">Keeper</span>
          </span>
        </Link>

        <div className="text-right hidden lg:block">
          <h1 className="text-lg md:text-xl font-semibold text-slate-800">Hi, {user?.name} 👋</h1>
          <p className="text-sm text-gray-500">Welcome back to your dashboard</p>
        </div>

        {/* Toggle button only on mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-2xl text-green-700"
          aria-label="Toggle Sidebar"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default DashboardNavbar;
