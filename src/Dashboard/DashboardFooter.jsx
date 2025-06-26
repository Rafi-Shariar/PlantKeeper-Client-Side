import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
const DashboardFooter = () => {

    const links = (
    <> 

      <NavLink to={'contact'} className={'hover:underline'}>Contact</NavLink>
       <NavLink to={'/'} className={'hover:underline'}>Back to Website</NavLink>
     
    </>
  );
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-green-950 text-neutral-content p-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logo}
              alt="PlantKeeper Logo"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-2xl font-bold">
              Plant<span className="text-green-500">Keeper</span>
            </h2>
          </div>
          <p className="text-sm text-green-100 leading-relaxed max-w-[500px]">
            Your trusted companion for smart plant care, watering reminders, and
            growth tracking — helping your greens thrive every season.
          </p>
        </div>
        <nav className="">
            <h1 className="font-bold text-slate-50">Useful Links</h1>
            {
                links
            }
          
        </nav>
      </footer>
    </div>
  );
};

export default DashboardFooter;
