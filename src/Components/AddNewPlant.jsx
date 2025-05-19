import React from "react";
import { IoMdAddCircle } from "react-icons/io";
const AddNewPlant = () => {
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
      <div className="max-w-4xl bg-green-50 p-10 mt-10 rounded-2xl mx-auto  shadow-2xl">
        <form className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
          <div className="fieldset">
            <label className="label">Image</label>
            <input
              type="text"
              className="w-full input"
              placeholder="Provide An Image URL"
              name="image"
              required
            />

            <label className="w-full label">Plant Name</label>
            <input
              type="text"
              className="w-full input"
              placeholder="Plant Name"
              name="plantname"
              required
            />

            <label  className="w-full w-full label">Plant Category</label>
            <select defaultValue="" required className="w-full select" name="category">
              <option >Succulent</option>
              <option>Fern</option>
              <option>Flowering</option>
              <option>Foliage</option>
              <option>Herb</option>
              <option>Cactus</option>
            </select>

           

             <label  className="w-full label">Care Level</label>
            <select defaultValue="" required className="w-full select" name="carelevel">
              <option >easy</option>
              <option>moderate</option>
              <option>difficult</option>
            </select>

            <label  className="w-full label">Watering Frequency</label>
            <input type="text" required className="w-full input" placeholder="Every 3 days ?" name="waterfrequency"/>
           
           </div>

           
         
          {/* Part-2 */}
          <div  className="w-full fieldset">
            

            <label  className="w-full label">Last Watered Day</label>
            <input type="date" required className="w-full input" placeholder="Date" name="lastwaterdate"/>


            
            <label  className="w-full label">Next Watering Date</label>
            <input type="date" required className="w-full input" placeholder="Password" name="nextwaterdate"/>

            <label  className="w-full label">health Status</label>
            <input type="text" required className="w-full input" placeholder="Health Status" name="healthstatus"/>

            <label  className="w-full label">Your Name</label>
            <input type="text" required className="w-full input" placeholder="Your Name" />

            <label  className="w-full label">Your Email</label>
            <input type="email" required className="w-full input" placeholder="Your Email" />


          </div>

          {/* Part-3 */}

          <div className="fieldset lg:col-span-2">
             <label className="label">Description</label>
            <textarea placeholder="Description about the plant..." className="textarea w-full" name="description"></textarea>

            <button className="btn bg-green-500 hover:bg-green-900 hover:text-white mt-4">Add This Plant</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewPlant;
