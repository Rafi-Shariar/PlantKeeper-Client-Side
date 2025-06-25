import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";
const NewPlantCard = ({ plant }) => {
  const {
    _id,
    image,
    plantname,
    category,
    uploadData,
    carelevel,
    description,
  } = plant;

  const formattedDate = new Date(uploadData).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden p-3 border border-primary p-4">
      {/* Upper Part */}
      <div className="flex gap-5">
        {/* Image Section */}
        <figure className="">
          <img
            src={image}
            alt={plantname}
            className="w-24 h-28 rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>
         
         {/* Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-green-700">{plantname}</h2>

          <div className="flex flex-col mt-3">
            <span className="">
              <strong className="font-semibold">Category:</strong> {category}
            </span>
            <span className="">
              <strong className="font-semibold">Care Level:</strong> {carelevel}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="border-t border-green-500 mt-4">
        <p className="text-slate-500 mt-3">{description.slice(0,70)}<Link to={`/details/${_id}`} className="font-bold">...read more</Link></p>
      </div>

      {/* Content Section */}
      <div className="mt-3">
        {/* Footer */}
        <div className="text-sm  text-gray-700 pt-1">
          <span className="italic">Uploaded: {formattedDate}</span>
        </div>
      </div>

      <div>
        <Link to={`/details/${_id}`} className="w-full btn btn-primary mt-3">Learn More</Link>
      </div>
    </div>
  );
};

export default NewPlantCard;
