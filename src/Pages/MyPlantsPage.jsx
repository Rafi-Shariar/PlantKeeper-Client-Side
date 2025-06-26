import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import LoadingSkeleton from "../Components/Loading/LoadingSkeleton";
import LoadingContainer from "../Components/Loading/LoadingContainer";
import MyPlantCard from "../Components/MyPlantCard";
import NoPlants from "../Components/NoPlants";

const MyPlantsPage = () => {
  const { user, loading } = use(AuthContext);
  const [myplants, setMyplants] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch("https://a10-server-beryl.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {
        const userEmail = user?.email;
        const filteredPlants = data.filter((plant) => plant.email == userEmail);
        setMyplants(filteredPlants);
        setIsDeleted(false);
      });
  }, [user, loading, isDeleted]);

  return (
    <div className="">
      {/* heading */}
      <div>
        <h1 className="text-2xl lg:text-4xl font-semibold text-green-600">
          My Plant Collection
        </h1>
        <p className="font-light text-slate-500 lg:text-lg mt-1">
          View and manage all the plants you've added to your collection. Keep
          track of your favorites, monitor their care, and celebrate your
          growing green space.
        </p>
      </div>

      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>

      {/* My Plants */}
      <div>
        {loading ? (
          <LoadingContainer></LoadingContainer>
        ) : myplants.length == 0 ? (
          <NoPlants></NoPlants>
        ) : (
          <div className="grid grid-cols-1 gap-7">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-green-700">
                    <th>Name</th>
                    <th>Category</th>
                    <th>Watering</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {myplants.map((plant) => (
              <MyPlantCard
                key={plant._id}
                plant={plant}
                setIsDeleted={setIsDeleted}
              />
            ))}
                  
                </tbody>
              </table>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlantsPage;

{
  /*  */
}
