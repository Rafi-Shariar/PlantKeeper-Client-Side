import React, { Suspense, useEffect, useState } from "react";
import { GiCottonFlower } from "react-icons/gi";
import LoadingContainer from "../Loading/LoadingContainer";
// import NewPlantCard from "./NewPlantCard";
const NewPlantCard = React.lazy(() => import('./NewPlantCard'));
const NewPlantsContainer = () => {

    const [currentNewPlants, setCurrentNewPlants] = useState([]);
    const [loading,setLoading] = useState(true);
    
    // loading recently added plants
    useEffect(()=>{

        fetch('http://localhost:3000/plants')
        .then(res => res.json())
        .then(data =>{
            setCurrentNewPlants(data);
            setLoading(false);
            
        } )
        

    },[])

    


  return (
    <div>
      <h1 className="text-2xl lg:text-4xl lg:mt-20 font-semibold text-green-600 mt-10">
        <GiCottonFlower className="inline" /> Recently Added Plants
      </h1>
      <p className="font-light text-slate-500 lg:text-lg mt-5">
        Discover the latest additions to your green collection — fresh, unique
        plants just added to help brighten your space.
      </p>

      {/* //Showing data */}

      <div>
        {
          loading ? (<LoadingContainer></LoadingContainer>) : (
            <Suspense fallback={<LoadingContainer></LoadingContainer>}>
              {
                currentNewPlants.map(plant => <NewPlantCard
                key={plant._id}
                plant={plant}></NewPlantCard>)
              }
            </Suspense>
          )
        }

      </div>
    </div>
  );
};

export default NewPlantsContainer;
