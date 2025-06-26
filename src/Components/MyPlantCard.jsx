import React, { use } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const MyPlantCard = ({ plant, setIsDeleted }) => {
  const {
    _id,
    image,
    plantname,
    category,
    waterfrequency,
    lastwaterdate,
    nextwaterdate,
    healthstatus,
  } = plant;

  const {user} = use(AuthContext);
  

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://a10-server-beryl.vercel.app/plants/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setIsDeleted(true);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your plant has been deleted.",
          icon: "success",
        });
      }
    });
  };

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
            <div className="font-bold text-green-700">{plantname}</div>
            <div className="text-sm opacity-50">{healthstatus.slice(0,50)}...</div>
          </div>
        </div>
      </td>

      {/* Category Info */}
      <td>
        <span className="text-xs text-gray-500">{waterfrequency}</span>
      </td>

      {/* Water Dates */}
      <td>
        <div className="text-sm">
          <span className="font-semibold text-gray-600">Last:</span>{" "}
          {lastwaterdate}
        </div>
        <div className="text-sm">
          <span className="font-semibold text-gray-600">Next:</span>{" "}
          {nextwaterdate}
        </div>
      </td>

      {/* Actions */}
      <th>
        <div className="flex gap-2">
          <Link
            to={`/details/${_id}`}
            className="btn btn-ghost btn-xs bg-green-600 text-white"
            title="View"
          >
            <FaExternalLinkAlt />
          </Link>

          <Link
            to={`/dashboard/${user?.email}/update/${_id}`}
            className="btn btn-ghost btn-xs bg-blue-500 text-white"
            title="Edit"
          >
            <MdOutlineEdit />
          </Link>

          <button
            onClick={handleDelete}
            className="btn btn-ghost btn-xs bg-red-500 text-white"
            title="Delete"
          >
            <RiDeleteBin6Fill />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default MyPlantCard;
