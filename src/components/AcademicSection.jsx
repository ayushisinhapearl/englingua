import React from "react";

const AcademicSection = ({ title, description, image, readTime }) => {
  return (
    <div className="bg-[#FAF3E9] p-6 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        <p className="text-gray-500 mt-2 text-sm">⏳ {readTime} min read</p>
      </div>
    </div>
  );
};

export default AcademicSection;
