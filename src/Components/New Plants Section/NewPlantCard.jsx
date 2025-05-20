import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";
const NewPlantCard = ({ plant }) => {
  const {_id, image, plantname, category, uploadData, carelevel } = plant;

  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={plantname}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-semibold text-green-700">{plantname}</h2>

        <p className="text-sm text-gray-500 flex md:flex-col md:gap-3 lg:flex-row justify-between border-b pb-5 border-green-600">
          <span className="capitalize badge badge-md bg-green-100"><span className="font-semibold text-green-800">CATEGORY:</span>{category}</span> 
          <span className="capitalize badge badge-md bg-green-100"><span className="font-semibold">CARE LEVEL:</span>{carelevel}</span> 
        </p>
        <div className="flex items-center justify-between pt-3">
          <span className="text-xs text-gray-400">Uploaded: {uploadData}</span>
          <Link to={`/details/${_id}`} className="btn  bg-green-500 hover:bg-green-700 text-white rounded-md px-4 py-1"><FaExternalLinkAlt />
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewPlantCard;
