import React, { Suspense, useEffect, useState } from "react";
import LoadingContainer from "./Loading/LoadingContainer";
import NewPlantCard from "./New Plants Section/NewPlantCard";
const PlantDisplayTable = () => {
  const [plantsData, setPlantsData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://a10-server-beryl.vercel.app/plantsorted")
      .then((res) => res.json())
      .then((data) => {
        setPlantsData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {
        loading? (<>

        <div>
          <LoadingContainer></LoadingContainer>
        </div>
        </>) : (
          <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
           
              {plantsData.map((plant) => (
                <NewPlantCard key={plant._id} plant={plant} />
              ))}
           
          </div>
          </div>
        )
      }
    </div>
  );
};

export default PlantDisplayTable;
