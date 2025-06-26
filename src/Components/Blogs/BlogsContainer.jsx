import React, { useEffect, useState } from 'react';
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import BlogCards from './BlogCards';
import { Link } from 'react-router';
const BlogsContainer = () => {

    const [blogs, setBlogs] = useState([]);      
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    
    fetch('https://a10-server-beryl.vercel.app/blogs')
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
                        <MdOutlineLibraryBooks className="inline" /> Explore Blogs
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

            <div>
               <div className="divider">
                <Link to={'/blogs'} className='btn btn-primary hover:bg-secondary hover:text-primary rounded-3xl'><FaExternalLinkAlt />Explore More Blogs</Link>
               </div>
            </div>
            
        </div>
    );
};

export default BlogsContainer;