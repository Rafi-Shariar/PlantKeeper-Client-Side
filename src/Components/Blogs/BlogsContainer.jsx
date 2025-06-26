import React, { useEffect, useState } from 'react';
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import BlogCards from './BlogCards';
const BlogsContainer = () => {

    const [blogs, setBlogs] = useState([]);      
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    
    fetch('http://localhost:3000/blogs')
    .then(res => res.json())
    .then((data)=>{
        const updatedData = data.slice(0,2);
        setBlogs(updatedData);
        setLoading(false);
    })

  },[])


    return (
        <div>

            {/* title */}
            <div>
                  <h1 className="text-2xl lg:text-4xl mt-16 font-semibold text-primary ">
                        <MdOutlineTipsAndUpdates className="inline" /> Explore Blogs
                      </h1>
                      <p className="font-light text-slate-500 lg:text-lg mt-1">
                         Discover expert tips, plant care routines, and seasonal advice to keep your green companions happy and healthy.
                      </p>
                
            </div>

            {/* Blogs */}
            <div>
                {
                    loading? <><div className='flex justify-center mt-16'>
                        <span className="loading loading-spinner text-success"></span>
                        </div></> : 
                        <>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10'>
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

export default BlogsContainer;