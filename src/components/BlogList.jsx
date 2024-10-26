import React from 'react';
import BlogItems from "@ui/BlogItems.jsx";

const BlogList = () => {
  const len = 10;
  const arrayOfBlog = Array.from({ length: len }, (_, index) => index + 1);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center space-y-3 p-2">
      {arrayOfBlog.map((item) => (
        <BlogItems key={item} />
      ))}
    </div>
  );
}

export default BlogList;
