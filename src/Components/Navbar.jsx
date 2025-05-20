import React, { use, useEffect, useState } from "react";
import { PiPlantBold } from "react-icons/pi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
const Navbar = () => {
  const { user } = use(AuthContext);
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setActiveUser(data);
        console.log(activeUser);
      });
  }, [user]);

  const links = (
    <>
      <NavLink to={`/`}>Home</NavLink>
      <NavLink to={`/allplants`}>All Plants</NavLink>
      <NavLink to={`/addplant`}>Add Plant</NavLink>
      <NavLink to={`/myplants`}>My Plants</NavLink>
    </>
  );
  return (
    <div className="sticky top-0 z-40 bg-white">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            {/* Mobile Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex gap-2"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-2xl">
            <PiPlantBold className="text-green-600 text-3xl hidden md:inline" />
            Plant<span className="-ml-1 text-green-600">Keeper</span>
          </a>
        </div>

        <div className="navbar-end hidden lg:flex lg:gap-10">
          {/* Desktop Menu */}
          <ul className="menu menu-horizontal px-1 flex flex- gap-5 text-lg">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex gap-3">
          {user ? (
            <>
              <div
                className="avatar tooltip tooltip-left"
                data-tip={`${activeUser?.name}`}
              >
                <div className="w-12 rounded-full">
                  <img src={activeUser?.photourl} />
                </div>
              </div>
              <button className="btn bg-green-500 hover:bg-green-900 hover:text-white">
                Logout
              </button>
            </>
          ) : (
            <>
              {" "}
              <Link
                to={`/login`}
                className="btn bg-green-500 hover:bg-green-900 hover:text-white"
              >
                Login
              </Link>
              <Link
                to={`/register`}
                className="btn bg-green-500 hover:bg-green-900 hover:text-white"
              >
                Register
              </Link>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
