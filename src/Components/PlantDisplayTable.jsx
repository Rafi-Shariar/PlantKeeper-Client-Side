import React, { Suspense, useEffect, useState } from "react";
import TableRow from "./TableRow";

const PlantDisplayTable = () => {
  const [plantsData, setPlantsData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/plantsorted")
      .then((res) => res.json())
      .then((data) => {
        setPlantsData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Plant Name</th>
              <th>Category</th>
              <th>Care Level</th>
              <th>Explore</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-5">
                  <span className="loading loading-spinner loading-4xl"></span>
                </td>
              </tr>
            ) : (
              plantsData.map((plant) => <TableRow key={plant._id} plant={plant}></TableRow>)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlantDisplayTable;
