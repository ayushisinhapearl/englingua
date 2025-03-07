import React from "react";
import blogData from "../data/blogData"; 
import BlogSection from "../components/BlogSection"; 


const BlogGrid = () => {
  return (
    // <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 ">
    //   <h1 className="text-4xl font-bold text-center pb-2">Selamat datang di Blog EF</h1>
    //   <p className="text-center text-xl text-gray-600">Pilih Saluran Menarik</p>
    //   <div className="flex flex-col gap-10 mt-8 w-full max-w-6xl items-center">
    //     {blogData.map((data, index) => (
    //       <BlogSection key={index} {...data} className="w-full md:w-3/4 lg:w-2/3 xl:w-3/4 h-[400px] " />
    //     ))}
    //   </div>
    // </div>
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <div className="w-full shadow-lg shadow-black/20 backdrop-blur-md">
      </div>
      <h1 className="text-4xl mt-12 font-bold text-center pb-2">Selamat datang di Blog EF</h1>
      <p className="text-center text-xl text-gray-600">Pilih Saluran Menarik</p>
      <div className="flex flex-col gap-10 mt-8 w-full max-w-6xl items-center">
        {blogData.map((data, index) => (
          <div className="w-full md:w-3/4 lg:w-2/3 xl:w-3/4 h-[400px] shadow-lg shadow-black/30 backdrop-blur-md rounded-xl overflow-hidden">
            <BlogSection key={index} {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
