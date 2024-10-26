import React from 'react';
import r from '../../assets/react.svg';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and start building your first component.",
    imageUrl: r,
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    excerpt: "Dive deep into advanced React patterns and improve your code.",
    imageUrl: r,
  },
  {
    id: 3,
    title: "React Performance Optimization",
    excerpt: "Tips and tricks to make your React applications blazing fast.",
    imageUrl: r,
  },
];

const SimpleBlogList = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="w-full p-4 rounded-lg border border-gray-800 bg-zinc-900 backdrop-blur-xl text-white dark:bg-zinc-800 dark:text-white  shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
              <img
                src={post.imageUrl}
                alt={`${post.title} thumbnail`}
                className="w-20 h-20 object-fill"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.svg?height=80&width=80";
                }}
              />
            </div>
            <div className='absolute right-4 space-y-5 flex flex-col  items-center'>
                <FaRegEdit className="w-6 h-6" />
                <MdDelete className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm">{post.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleBlogList;
