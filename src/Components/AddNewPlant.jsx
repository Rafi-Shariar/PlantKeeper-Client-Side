import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import Swal from "sweetalert2";
const AddNewPlant = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());
    const uploadData = new Date().toISOString().split("T")[0];

    const newPlantData = { ...plantData, uploadData };

    //sending data to DB
    fetch("https://a10-server-beryl.vercel.app/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlantData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Plant Added !",
          icon: "success",
          draggable: true,
        });
      });

      form.reset();

      
  };

  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-2 mt-5">
        <IoMdAddCircle className="text-3xl text-green-600" />
        <h1 className="text-3xl font-semibold text-green-600">
          Add A New Plant
        </h1>
      </div>
      <p className="text-slate-600 mt-3">
        Every plant has a story—let's start yours here. Give your plant a name,
        tell us what kind it is, and set up the care routine it deserves.
        Whether it's a succulent, a fern, or a flowering beauty, we're here to
        help you help it thrive.
      </p>

      {/* Form */}
      <div className="max-w-5xl mx-auto p-8 mt-12 bg-white rounded-3xl shadow-2xl">
  <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
    🌿 Add a New Plant
  </h2>

  <form
    onSubmit={handleSubmit}
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
  >
    {/* Left Column */}
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Image URL</label>
        <input
          type="text"
          name="image"
          placeholder="https://example.com/plant.jpg"
          className="input input-bordered w-full mt-1 border-green-800 bg-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Plant Name</label>
        <input
          type="text"
          name="plantname"
          placeholder="Aloe Vera"
          className="input input-bordered w-full mt-1 border-green-800 bg-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Plant Category</label>
        <select
          name="category"
          className="select select-bordered w-full mt-1 border-green-800 bg-white"
          required
        >
          <option disabled value="">Select Category</option>
          <option>Succulent</option>
          <option>Fern</option>
          <option>Flowering</option>
          <option>Foliage</option>
          <option>Herb</option>
          <option>Cactus</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Care Level</label>
        <select
          name="carelevel"
          className="select select-bordered w-full mt-1 border-green-800 bg-white"
          required
        >
          <option disabled value="">Select Level</option>
          <option>Easy</option>
          <option>Moderate</option>
          <option>Difficult</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Watering Frequency</label>
        <input
          type="text"
          name="waterfrequency"
          placeholder="Every 3 days"
          className="input input-bordered w-full mt-1 border-green-800 bg-white"
          required
        />
      </div>
    </div>

    {/* Right Column */}
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Last Watered Date</label>
        <input
          type="date"
          name="lastwaterdate"
          className="input input-bordered w-full mt-1 border-green-800 bg-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Next Watering Date</label>
        <input
          type="date"
          name="nextwaterdate"
          className="input input-bordered w-full mt-1 border-green-800 bg-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Health Status</label>
        <input
          type="text"
          name="healthstatus"
          placeholder="Healthy / Needs Attention"
          className="input input-bordered w-full mt-1 border-green-800 bg-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="input input-bordered w-full mt-1 border-green-800 bg-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="input input-bordered w-full mt-1 border-green-800 bg-white"
          required
        />
      </div>
    </div>

    {/* Full Width Description and Submit */}
    <div className="md:col-span-2">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Plant Description</label>
        <textarea
          name="description"
          rows="4"
          placeholder="Write a brief description about this plant..."
          className="textarea textarea-bordered w-full border-green-800 bg-white"
        ></textarea>
      </div>

      <div className="mt-6 text-center">
        <button
          type="submit"
          className="btn bg-green-600 hover:bg-green-800 text-white px-10 rounded-full"
        >
          🌱 Add This Plant
        </button>
      </div>
    </div>
  </form>
</div>

    </div>
  );
};

export default AddNewPlant;
