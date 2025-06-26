import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext"; // adjust path
import Swal from "sweetalert2";

const NewBlog = () => {
  const { user } = use(AuthContext);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

   useEffect(()=>{
      fetch(`http://localhost:3000/users/${user?.email}`)
      .then(res => res.json())
      .then( data => {
        setCurrentUser(data);
        setLoading(false);
      })
  
    },[user])

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const blog = {
      Title: form.title.value,
      Banner: form.banner.value,
      Blog: form.blog.value,
      WrittenBy: currentUser?.name || "Anonymous",
      Date: new Date().toISOString().split("T")[0],
      email: currentUser?.email || "",
    };

    fetch("http://localhost:3000/addblog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Blog Published!",
          text: "Your blog has been posted successfully.",
          confirmButtonColor: "#3085d6",
        });
        form.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div>
        {
            loading? (<div className="flex justify-center mt-30">
<span className="loading loading-spinner loading-xl"></span>

            </div>) : (<div className="max-w-4xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
        ✍️ {currentUser?.name} <span className="font-normal">Share your thought</span>
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            required
            className="input input-bordered w-full bg-white border-green-900"
            placeholder="Blog Title"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-gray-700">Banner Image URL</label>
          <input
            type="text"
            name="banner"
            required
            className="input input-bordered w-full bg-white border-green-900"
            placeholder="https://i.ibb.co/your-image.jpg"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-gray-700">Blog Content</label>
          <textarea
            name="blog"
            required
            rows={6}
            className="textarea textarea-bordered w-full h-[300px] bg-white border-green-800"
            placeholder="Write your blog here..."
          ></textarea>
        </div>

        <div className="text-center mt-4">
          <button
            type="submit"
            className="btn bg-green-600 text-white hover:bg-green-800 px-10"
            disabled={!user}
            title={!user ? "Login to submit a blog" : ""}
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>)
        }
    </div>
  );
};

export default NewBlog;
