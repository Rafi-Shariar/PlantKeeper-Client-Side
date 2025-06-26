import React, { use } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, Links } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const AllPlantsRow = ({ plant}) => {
  const {
    _id,
    image,
    plantname,
    category,
    waterfrequency,
    carelevel,
    name,

    healthstatus,
  } = plant;


  


  return (
    <tr className="hover">

     

      {/* Plant Info */}
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt={plantname} />
            </div>
          </div>
          <div>
            <Link to={`/details/${_id}`}><div className="font-bold text-green-700 hover:underline">{plantname}</div></Link>
            <div className="text-sm opacity-50">{healthstatus.slice(0,50)}...</div>
          </div>
        </div>
      </td>

      {/* Category Info */}
      <td>
        <span className="text-xs text-gray-500">{category}</span>
      </td>

      <td>
        <span className="text-xs text-gray-500">{waterfrequency}</span>
      </td>

       <td>
        <span className="text-xs text-gray-500">{carelevel}</span>
      </td>
       <td>
        <span className="text-xs text-gray-500">{name}</span>
      </td>
     

   
    </tr>
  );
};

export default AllPlantsRow;
