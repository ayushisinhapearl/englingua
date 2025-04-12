import React from "react";
import AcademicSection from "../components/AcademicSection";
import { academicData } from "../data/blogData"; // Import data
import NavbarDetail from "../components/NavbarDetail";
// import Navbar from "../components/Navbar";

const AllBlogs = () => {
  return (
    <div className="bg-[#FAF3E9] min-h-screen">
      {/* <Navbar /> */}
      <NavbarDetail />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Academics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {academicData.map((item, index) => (
            <AcademicSection key={index} {...item} />
          ))}
        </div>
        <a href="#" className="text-blue-600 mt-4 inline-block">See all Academics posts</a>
      </div>
    </div>
  );
};

export default AllBlogs;
