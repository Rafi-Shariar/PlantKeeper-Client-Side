import React, {  } from "react";
import { GiPlantSeed } from "react-icons/gi";
import PlantDisplayTable from "../Components/PlantDisplayTable";

const AllPlantsPage = () => {

    


  return (
    <div>
        {/* title */}
      <div>
        <h1 className="text-2xl lg:text-4xl font-semibold text-green-600 mt-10">
          <GiPlantSeed className="inline" /> Explore Our Plant Collection
        </h1>
        <p className="font-light text-slate-500 lg:text-lg mt-5">
          Browse the complete collection of our listed plants — from timeless
          classics to rare finds, all in one place to enrich your indoor or
          outdoor space.
        </p>
      </div>

      {/* Table */}
      <div>
        <PlantDisplayTable ></PlantDisplayTable>
      </div>
    </div>
  );
};

export default AllPlantsPage;
