import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const data = useLoaderData();

  const [image, setImage] = useState(data?.image);
  const [plantname, setPlantName] = useState(data?.plantname);
  const [category, setCategory] = useState(data?.category);
  const [carelevel, setCarelevel] = useState(data?.carelevel);
  const [waterfrequency, setWaterfrequency] = useState(data?.waterfrequency);
  const [lastwaterdate, setLastwaterdate] = useState(data?.lastwaterdate);
  const [nextwaterdate, setNextwaterdate] = useState(data?.nextwaterdate);
  const [healthstatus, setHealthstatus] = useState(data?.healthstatus);
  const [name, setName] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [description, setDescription] = useState(data?.description);
  const [uploadData, setUploadData] = useState(data?.uploadData);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const UpdatedPlantData = Object.fromEntries(formData.entries());
    const newUpdatedPlant = { ...UpdatedPlantData, uploadData };

    fetch(`http://localhost:3000/update/${data?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUpdatedPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Update Done !",
            icon: "success",
            draggable: true,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Updated Failed",
            text: "Nothing To Updated!",
          });
        }
      });
  };

  return (
    <div>
      {/* Titile */}
      <div>
        <div className="flex items-center gap-2 mt-5">
          <h1 className="text-3xl font-semibold text-green-600">
            Update Plant Information
          </h1>
        </div>
        <p className="text-slate-600 mt-3">
          Every plant evolves—let's keep its story growing. Update your plant’s
          name, change its type, or adjust the care routine as it needs. Whether
          it's thriving, struggling, or simply maturing, we’re here to support
          your plant's journey.
        </p>
      </div>

      <div className="flex items-center justify-center gap-5 mt-10">
        <img src={data?.image} alt="" className="w-20 h-20 rounded-2xl" />
        <div>
          <h1 className="text-2xl font-light text-green-600">
            {data?.plantname}
          </h1>
          <h1 className="badge bg-green-900 text-white font-light text-green-600">
            {data?.category}
          </h1>
        </div>
      </div>

      {/* Update Form */}
      <div className="mt-10">
        <div className="max-w-4xl bg-green-50 p-10 mt-10 rounded-2xl mx-auto  shadow-2xl">
          <form
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10"
            onSubmit={handleUpdate}
          >
            <div className="fieldset">
              <label className="label">Image</label>
              <input
                type="text"
                className="w-full input"
                placeholder="Provide An Image URL"
                name="image"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />

              <label className="w-full label">Plant Name</label>
              <input
                type="text"
                className="w-full input"
                placeholder="Plant Name"
                name="plantname"
                required
                value={plantname}
                onChange={(e) => setPlantName(e.target.value)}
              />

              <label className="w-full w-full label">Plant Category</label>
              <select
                defaultValue=""
                required
                className="w-full select"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Succulent</option>
                <option>Fern</option>
                <option>Flowering</option>
                <option>Foliage</option>
                <option>Herb</option>
                <option>Cactus</option>
              </select>

              <label className="w-full label">Care Level</label>
              <select
                defaultValue=""
                required
                className="w-full select"
                name="carelevel"
                value={carelevel}
                onChange={(e) => setCarelevel(e.target.value)}
              >
                <option>easy</option>
                <option>moderate</option>
                <option>difficult</option>
              </select>

              <label className="w-full label">Watering Frequency</label>
              <input
                type="text"
                required
                className="w-full input"
                placeholder="Every 3 days ?"
                name="waterfrequency"
                value={waterfrequency}
                onChange={(e) => setWaterfrequency(e.target.value)}
              />
            </div>

            {/* Part-2 */}
            <div className="w-full fieldset">
              <label className="w-full label">Last Watered Day</label>
              <input
                type="date"
                required
                className="w-full input"
                placeholder="Date"
                name="lastwaterdate"
                value={lastwaterdate}
                onChange={(e) => setLastwaterdate(e.target.value)}
              />

              <label className="w-full label">Next Watering Date</label>
              <input
                type="date"
                required
                className="w-full input"
                placeholder="Password"
                name="nextwaterdate"
                value={nextwaterdate}
                onChange={(e) => setNextwaterdate(e.target.value)}
              />

              <label className="w-full label">health Status</label>
              <input
                type="text"
                required
                className="w-full input"
                placeholder="Health Status"
                name="healthstatus"
                value={healthstatus}
                onChange={(e) => setHealthstatus(e.target.value)}
              />

              <label className="w-full label">Your Name</label>
              <input
                type="text"
                required
                className="w-full input text-slate-400"
                placeholder="Your Name"
                name="name"
                value={name}
              />

              <label className="w-full label">Your Email</label>
              <input
                type="email"
                required
                className="w-full input text-slate-400"
                placeholder="Your Email"
                name="email"
                value={email}
              />
            </div>

            {/* Part-3 */}

            <div className="fieldset lg:col-span-2">
              <label className="label">Description</label>
              <textarea
                placeholder="Description about the plant..."
                className="textarea w-full"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="btn bg-green-500 hover:bg-green-900 hover:text-white mt-4"
              >
                Upadate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
