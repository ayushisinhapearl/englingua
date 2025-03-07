import React from "react";

const BlogSection = ({ title, description, links, image }) => {
  return (
    <div className="bg-white  h-full w-full rounded-xl shadow-xl flex flex-col md:flex-row gap-6  ">
      <img src={image} alt={title} className=" object-fit  h-full w-1/2" />
      <div className="flex flex-col justify-center gap-4 p-4 w-1/2 ">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-700 text-sm mt-2">{description}</p>
        <ul className="mt-3 list-disc pl-5 text-gray-800 text-sm">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="text-gray-800 hover:underline">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div>
        <button className="mt-4 border  border-gray-600 rounded-full px-4 py-2 text-sm hover:bg-gray-200">
          Kunjungi saluran
        </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
    