import React from 'react';
import { useLoaderData } from 'react-router';

const BlogDetails = () => {
  const blog = useLoaderData();
  const { Banner, Title, Blog, Date: blogDate, WrittenBy } = blog;

   const formattedDate = new Date(blogDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-16">
      <div className="mb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-3">{Title}</h1>
        <p className="text-gray-500 text-sm">
          Written by <span className="font-semibold text-green-600">{WrittenBy}</span> • {formattedDate}
        </p>
      </div>

      <img
        src={Banner}
        alt={Title}
        className="w-full h-64 md:h-96 object-cover rounded-xl shadow mb-10"
      />

      <article className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
        {Blog}
      </article>
    </div>
  );
};

export default BlogDetails;
