import React, { use, useEffect, useState } from "react";
import { PiPlantBold } from "react-icons/pi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { Tooltip } from "react-tooltip";
import logo from "../assets/logo.png";
const Navbar = () => {
  const { user, logOutUser, loading } = use(AuthContext);
  const [activeUser, setActiveUser] = useState();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    fetch(`https://a10-server-beryl.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setActiveUser(data);
      });
  }, [user, loading]);

  const handleLogOut = (e) => {
    e.preventDefault();
    logOutUser().then().catch();
  };

  const links = (
    <>
       <div className="md:hidden">
       <Link to={"/"} className="flex text-xl md:text-2xl">
        <img src={logo} className="w-10 h-10 object-contain " />
        <h1 className="font-semibold mt-2 ml-1 text-primary">
          Plant<span className="text-secondary">Keeper</span>
        </h1>
      </Link>
     </div>
      <NavLink to={`/`}>Home</NavLink>
      <NavLink to={`/allplants`}>All Plants</NavLink>
      <NavLink to={`/contact`}>Contact</NavLink>
      <NavLink to={`/blogs`}>Blog</NavLink>

      <div className="mt-2 lg:hidden">
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="btn bg-green-500 hover:bg-green-900 hover:text-white  "
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {" "}
            <Link
              to={`/login`}
              className="btn  hover:bg-green-900 hover:text-white mr-3"
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

  
    </>
  );
  return (
    <div className="sticky top-0 z-40 bg-primary">
      <div className="navbar max-w-7xl mx-auto">
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
          <Link
            to={"/"}
            className="hidden md:flex text-xl md:text-2xl items-center"
          >
            <img
              src={logo}
              className="w-10 h-10 object-contain hidden md:inline"
            />
            <h1 className="font-semibold mt-2 ml-1 text-white">
              Plant<span className="text-secondary">Keeper</span>
            </h1>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex lg:gap-10">
          {/* Desktop Menu */}
          <ul className="menu menu-horizontal px-1 flex flex- gap-5 text-lg text-white">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex gap-3">
          {/* DarkMode */}
          <label className=" swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle} />

            {/* sun icon */}
            <svg
              className="swap-on h-7 w-7  fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-7 w-7  fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {loading ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            <>
              {user ? (
                <>
                  <div
                    className="avatar"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`${activeUser?.name}`}
                  >
                    <div className="w-12 rounded-full">
                      <Tooltip id="my-tooltip" place={"left"} />
                      <img src={activeUser?.photourl} />
                    </div>
                  </div>
                  <Link to={`/dashboard/${user.email}`} className="btn">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="btn bg-green-500 hover:bg-green-900 hover:text-white hidden lg:inline"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <div className="hidden lg:inline">
                    {" "}
                    <Link
                      to={`/login`}
                      className="btn bg-secondary hover:bg-base-200 hover:text-white"
                    >
                      Login
                    </Link>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
