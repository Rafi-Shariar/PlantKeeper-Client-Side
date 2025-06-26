import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import allpants from '../../assets/Dashboard/plantAll.png';
import myplants from '../../assets/Dashboard/plant (1).png';
import blogs from '../../assets/Dashboard/blogging.png';
import myblogs from '../../assets/Dashboard/pen.png';
const DashboardHomePage = () => {
  const { user } = use(AuthContext);

  const [currentuser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`https://a10-server-beryl.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
      });
  }, [user]);

  useEffect(() => {
    fetch(`https://a10-server-beryl.vercel.app/dashboard-stats/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        console.log(stats);

        setLoading(false);
      });
  }, [user]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner text-success mt-20"></span>
        </div>
      ) : (
        <div>
          <div>
            <div className="flex items-center gap-4 mb-10 rounded-xl p-5 shadow-md  bg-white dark:bg-gray-200">
              <img
                src={currentuser?.photourl}
                alt={currentuser?.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-green-400"
              />
              <div>
                <h2 className="text-2xl font-semibold text-green-700">
                  {currentuser?.name}
                </h2>
                <p className="text-green-600">{currentuser?.email}</p>
              </div>
            </div>

            {/* cards */}
            <div className="">
              <h1 className="text-3xl font-semibold text-green-900">
                Overview
              </h1>

              <div className="grid grid-1 md:grid-cols-2 gap-5 mt-6 max-w-3xl">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-orange-100 via-orange-300 to-orange-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 w-full flex justify-between items-center">
                 <div>
                   <p className="text-sm uppercase text-green-900 font-semibold mb-2">
                    Total Plants
                  </p>
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-bold text-green-900">
                      {stats?.totalPlants}
                    </h2>
                  </div>
                 </div>

                  <div>
                    <img src={allpants} alt="" className="w-18"/>
                  </div>

                </div>

                {/* Card 2 */}
                

                <div className="bg-gradient-to-br from-blue-100 via-blue-300 to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 w-full flex justify-between items-center">
                 <div>
                   <p className="text-sm uppercase text-green-900 font-semibold mb-2">
                    My Plants
                  </p>
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-bold text-green-900">
                      {stats?.userPlantsCount}
                    </h2>
                  </div>
                 </div>

                  <div>
                    <img src={myplants} alt="" className="w-18"/>
                  </div>

                </div>


                {/* Card 3 */}

                <div className="bg-gradient-to-br from-purple-100 via-purple-300 to-purple-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 w-full flex justify-between items-center">
                 <div>
                   <p className="text-sm uppercase text-green-900 font-semibold mb-2">
                    Total Plants
                  </p>
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-bold text-green-900">
                      {stats?.totalBlogs}
                    </h2>
                  </div>
                 </div>

                  <div>
                    <img src={blogs} alt="" className="w-18"/>
                  </div>

                </div>


                {/* Card 4 */}

                <div className="bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 w-full flex justify-between items-center">
                 <div>
                   <p className="text-sm uppercase text-green-900 font-semibold mb-2">
                    Total Plants
                  </p>
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-bold text-green-900">
                      {stats?.userBlogsCount}
                    </h2>
                  </div>
                 </div>

                  <div>
                    <img src={myblogs} alt="" className="w-18"/>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHomePage;
