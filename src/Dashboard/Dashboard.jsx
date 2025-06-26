import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router";
import DashboardNavbar from "./DashboardNavbar";
import { FaTimes } from "react-icons/fa";
import Footer from '../Components/Footer';
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {email} = useParams();

  const [user, setUser] = useState(null);
  

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const links = (
  <>
    <NavLink
      to={`/dashboard/${email}`}
      end
      className={({ isActive }) =>
        isActive
          ? "bg-green-900 text-white px-4 py-2 rounded-md"
          : "text-gray-700 hover:text-green-700 px-4 py-2"
      }
    >
      Dashboard
    </NavLink>

    <NavLink
      to={`addplant`}
      className={({ isActive }) =>
        isActive
          ? "bg-green-900 text-white px-4 py-2 rounded-md"
          : "text-gray-700 hover:text-green-700 px-4 py-2"
      }
    >
      Add Plant
    </NavLink>

    <NavLink
      to={`submitBlog`}
      className={({ isActive }) =>
        isActive
          ? "bg-green-900 text-white px-4 py-2 rounded-md"
          : "text-gray-700 hover:text-green-700 px-4 py-2"
      }
    >
      Add New Blog
    </NavLink>

    <NavLink
      to={`myplants`}
      className={({ isActive }) =>
        isActive
          ? "bg-green-900 text-white px-4 py-2 rounded-md"
          : "text-gray-700 hover:text-green-700 px-4 py-2"
      }
    >
      My Plants
    </NavLink>

    <NavLink
      to={`Allplants`}
      className={({ isActive }) =>
        isActive
          ? "bg-green-900 text-white px-4 py-2 rounded-md"
          : "text-gray-700 hover:text-green-700 px-4 py-2"
      }
    >
      All Plants
    </NavLink>

    <NavLink
      to={`contact`}
      className={({ isActive }) =>
        isActive
          ? "bg-green-900 text-white px-4 py-2 rounded-md"
          : "text-gray-700 hover:text-green-700 px-4 py-2"
      }
    >
      Contact
    </NavLink>

    <NavLink
      to={`/`}
      className={({ isActive }) =>
        isActive
          ? "bg-green-900 text-white px-4 py-2 rounded-md"
          : "text-gray-700 hover:text-green-700 px-4 py-2"
      }
    >
      Back to Website
    </NavLink>
  </>
);


  useEffect(()=>{
    fetch(`http://localhost:3000/users/${email}`)
    .then(res => res.json())
    .then( data => {
      setUser(data);
      
    })

  },[])

  return (
    <div className="min-h-screen flex flex-col bg-green-50 text-black">
      <DashboardNavbar toggleSidebar={toggleSidebar} user={user}/>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`
            fixed top-0 left-0 z-40 w-64 p-6 min-h-screen
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:relative lg:block lg:z-auto bg-white
          `}
        >
          {/* Close button for mobile */}
          <div className="lg:hidden flex justify-end mb-4">
            <button
              onClick={toggleSidebar}
              className="text-xl text-green-700"
              aria-label="Close Sidebar"
            >
              <FaTimes />
            </button>
          </div>

          {/* Sidebar content */}
          <nav className="space-y-4 flex flex-col">
            {links}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      
    </div>
  );
};

export default Dashboard;
