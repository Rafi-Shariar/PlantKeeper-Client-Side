import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import LoadingSkeleton from "../Components/Loading/LoadingSkeleton";
import LoadingContainer from "../Components/Loading/LoadingContainer";
import MyPlantCard from "../Components/MyPlantCard";

const MyPlantsPage = () => {
  const { user , loading } = use(AuthContext);
  const [myplants, setMyplants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => {
            const userEmail = user?.email;
            const filteredPlants = data.filter(plant => plant.email == userEmail);
            setMyplants(filteredPlants);
        
      });
  }, [user,loading]);

  return (
    <div className="">
      {/* heading */}
      <div>
        <h1 className="text-2xl lg:text-4xl font-semibold text-green-600 mt-10">
          Your Plant Collection
        </h1>
        <p className="font-light text-slate-500 lg:text-lg mt-5">
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
        {
            loading? (<LoadingContainer></LoadingContainer>) : (<>
            <div className="grid grid-cols-1 gap-7 mt-10">
                 {
                
                myplants.map(plant => <MyPlantCard key={plant._id} plant={plant}></MyPlantCard>)

            }

            </div>
           </>)
        }

      </div>
    </div>
  );
};

export default MyPlantsPage;
