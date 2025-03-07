import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed bg-white z-50 py-4 px-6 min-w-full flex justify-between items-center  shadow-xl ">
      <h1 className="text-xl font-bold">Blog EF</h1>
      
      <ul className="flex items-center space-x-4">
        <li><a className="text-gray-700">+62 811-1370-3626</a></li>
        <li className="text-gray-700"><a> + </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
