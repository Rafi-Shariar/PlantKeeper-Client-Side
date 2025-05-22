import React from "react";
import { MdOutlineHealthAndSafety, MdOutlineEdit } from "react-icons/md";
import { FaVoteYea } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaHandHoldingWater } from "react-icons/fa";
const MyPlantCard = ({ plant, setIsDeleted }) => {
  const {
    _id,
    image,
    plantname,
    carelevel,
    waterfrequency,
    lastwaterdate,
    nextwaterdate,
    healthstatus,
  } = plant;

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
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="shadow-lg rounded-2xl p-5 max-w-4xl mx-auto md:min-w-128">
      <div className="grid lg:grid-cols-4 gap-5 items-center">
        <div>
          <img
            src={image}
            alt=""
            className="w-40 h-30 lg:w-50 lg:h-55 max-w-sm rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Details */}
        <div className="grid gap-1 lg:col-span-2">
          <h1 className="text-lg lg:text-3xl font-semibold text-green-600">
            {plantname}
          </h1>

          <h1 className="text-xs lg:text-lg mt-3">
            <MdOutlineHealthAndSafety className="inline mr-2 text-yellow-500" />
            Health Status: <span className="font-light">{healthstatus}</span>
          </h1>

          <h1 className="text-xs lg:text-lg">
            <FaVoteYea className="inline mr-2 text-orange-600" />
            Care Level: <span className="font-light">{carelevel}</span>
          </h1>

          <h1 className="text-xs lg:text-lg">
            <IoIosWater className="inline mr-2 text-blue-600 " />
            Watering Frequency:{" "}
            <span className="font-light">{waterfrequency}</span>
          </h1>

          <div className="mt-3 flex flex-col">
            <h1 className="text-xs lg:text-lg badge bg-green-100 bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-100">
              Last Water Date:{" "}
              <span className="font-light">{lastwaterdate}</span>
            </h1>

            <h1 className="text-xs lg:text-lg badge bg-green-100 mt-2 bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-100">
              Next Watering Date:{" "}
              <span className="font-light">{nextwaterdate}</span>
            </h1>


       
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 justify-items-center">
          <Link
            to={`/details/${_id}`}
            className="btn btn-circle text-xl bg-green-600 text-white"
          >
            <FaExternalLinkAlt />
          </Link>

          <Link
            to={`/update/${_id}`}
            className="btn btn-circle text-xl text-white bg-blue-400"
          >
            <MdOutlineEdit />
          </Link>

          <button
            onClick={handleDelete}
            className="btn btn-circle text-xl text-white bg-red-400"
          >
            <RiDeleteBin6Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPlantCard;
