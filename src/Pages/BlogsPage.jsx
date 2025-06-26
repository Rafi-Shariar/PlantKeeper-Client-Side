import React, { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa";
import BlogCards from "../Components/Blogs/BlogCards";
const BlogsPage = () => {

    const [blogs,setBlogs] = useState(null);
    const [loading,setLoading] = useState(true);

     useEffect(()=>{
        
        fetch('http://localhost:3000/blogs')
        .then(res => res.json())
        .then((data)=>{
            setBlogs(data);
            setLoading(false);
        })
    
      },[])
    

  return (
    <div>
      {/* Title */}
      <div>
        <h1 className="text-2xl lg:text-4xl font-semibold text-green-600 mt-10">
          <FaBook className="inline" /> Plant Wisdom & Care Insights
        </h1>
        <p className="font-light text-slate-500 lg:text-lg mt-2">
          Explore expert tips, seasonal guides, and plant care articles to keep
          your green companions happy and healthy year-round.
        </p>
      </div>

      {/* Container */}
      <div>
        {
                    loading? <><div className='flex justify-center mt-16'>
                        <span className="loading loading-spinner text-success"></span>
                        </div></> : 
                        <>
                        <div className='grid grid-cols-1 gap-10 mt-10'>
                            {
                                blogs.map(blog => <BlogCards blog={blog}></BlogCards>)
                            }

                        </div>
                        </>
                }

      </div>
    </div>
  );
};

export default BlogsPage;
