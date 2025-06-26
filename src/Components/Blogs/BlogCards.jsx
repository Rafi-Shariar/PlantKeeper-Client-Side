import React from 'react';

const BlogCards = ({ blog }) => {
  const { Banner, Title, Blog, Date, WrittenBy } = blog;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden mb-8 max-w-3xl mx-auto">
      <img
        src={Banner}
        alt={Title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5 space-y-3">
        <h2 className="text-2xl font-bold text-green-700">{Title}</h2>

        <p className="text-sm text-gray-500">
         
        </p>

        <p className="text-gray-700 text-base leading-relaxed">
          {Blog.slice(0, 180)}...
        </p>

        <button className="mt-2 text-green-600 font-semibold hover:underline">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCards;
