import React, { Suspense, useEffect, useState } from "react";
import LoadingContainer from "./Loading/LoadingContainer";
import NewPlantCard from "./New Plants Section/NewPlantCard";
const PlantDisplayTable = () => {
  const [plantsData, setPlantsData] = useState();
  const [loading, setLoading] = useState(true);

  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams();
    if (sortOrder) params.append("sort", sortOrder);
    if (categoryFilter) params.append("category", categoryFilter);

    fetch(`http://localhost:3000/plantsorted?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setPlantsData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [sortOrder, categoryFilter]);

  return (
    <div>
      {/* Filter and Sorting  */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white border border-green-200 p-4 rounded-xl shadow-lg mb-6 mt-10">
        {/* Sort */}
        <div className="flex items-center justify-center gap-2 w-full">
          <label
            htmlFor="sort"
            className="text-sm lg:text-lg font-semibold text-primary"
          >
            Sort by Name:
          </label>
          <select
            id="sort"
            className="select select-bordered select-sm text-green-700 border-green-300 focus:outline-none focus:ring-green-500 w-[30%]"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">A - Z (Ascending)</option>
            <option value="desc">Z - A (Descending)</option>
          </select>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-2 w-full">
          <label
            htmlFor="category"
            className="text-sm lg:text-lg font-semibold text-primary"
          >
            Filter by Category:
          </label>
          <select
            id="category"
            className="select select-bordered select-sm text-green-700 border-green-300 focus:outline-none focus:ring-green-500 w-[50%]"
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All</option>
            <option>Succulent</option>
            <option>Fern</option>
            <option>Flowering</option>
            <option>Foliage</option>
            <option>Herb</option>
            <option>Cactus</option>
          </select>
        </div>
      </div>

      {/* Data Container */}
      <div>
        {loading ? (
          <>
            <div>
              <LoadingContainer></LoadingContainer>
            </div>
          </>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {plantsData.map((plant) => (
                <NewPlantCard key={plant._id} plant={plant} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantDisplayTable;
