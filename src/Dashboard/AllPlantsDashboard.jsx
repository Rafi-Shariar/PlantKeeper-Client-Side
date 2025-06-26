import React, { useEffect, useState } from 'react';
import { GiPlantSeed } from "react-icons/gi";
import { Link } from 'react-router';
import MyPlantCard from '../Components/MyPlantCard';
import AllPlantsRow from './AllPlantsRow';

const AllPlantsDashboard = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://a10-server-beryl.vercel.app/plantsorted")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-lg text-green-700 font-semibold">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-semibold text-green-600">
          <GiPlantSeed className="inline mr-1" /> Explore Plant Collections
        </h1>
        <p className="font-light text-slate-500 lg:text-lg mt-2">
          Browse the complete collection of our listed plants — from timeless classics to rare finds.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-7 mt-10">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-green-900">
                    <th>Plant Name</th>
                    <th>Category</th>
                    <th>Watering Frequency</th>
                    <th>Care Level</th>
                    <th>Added By</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {plants.map((plant) => (
              <AllPlantsRow
                key={plant._id}
                plant={plant}
  
              />
            ))}
                  
                </tbody>
              </table>
            </div>
            
          </div>

      
    </div>
  );
};

export default AllPlantsDashboard;
