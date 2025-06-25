import React, { Suspense, useEffect, useState } from "react";
import { GiCottonFlower } from "react-icons/gi";
import LoadingContainer from "../Loading/LoadingContainer";
// import NewPlantCard from "./NewPlantCard";
const NewPlantCard = React.lazy(() => import("./NewPlantCard"));
const NewPlantsContainer = () => {
  const [currentNewPlants, setCurrentNewPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  // loading recently added plants
  useEffect(() => {
    fetch("https://a10-server-beryl.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {

        const sortedData = data.sort((a,b) => {
          return new Date(b.uploadData) - new Date(a.uploadData)
        });


        const recentPlants = sortedData.slice(0,6);
        setCurrentNewPlants(recentPlants);


        setLoading(false);
      
      });

  
      
  }, []);

  return (
    <div className="bg-green-50 p-5 lg:p-10 mt-10 rounded-3xl shadow-2xl">
      <h1 className="text-2xl lg:text-4xl  font-semibold text-primary ">
        <GiCottonFlower className="inline" /> Recently Added Plants
      </h1>
      <p className="font-light text-slate-500 lg:text-lg mt-1">
        Discover the latest additions to your green collection — fresh, unique
        plants just added to help brighten your space.
      </p>

      {/* //Showing data */}

      <div>
        {loading ? (
          <div className="">
            <LoadingContainer />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
           
              {currentNewPlants.map((plant) => (
                <NewPlantCard key={plant._id} plant={plant} />
              ))}
           
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPlantsContainer;
