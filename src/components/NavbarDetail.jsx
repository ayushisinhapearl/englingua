import React from "react";
import { FiSearch } from "react-icons/fi"; // Import search icon

const NavbarDetail = () => {
  return (
    <nav className="bg-[#FAF3E9] border-b border-gray-300 p-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Section */}
        <div className="flex justify-between w-full items-center mb-4 px-6">
          {/* Logo & Text */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="EF Academy" className="h-6 w-6" />
            <div>
              <span className="font-semibold text-gray-900 text-lg">
                EF Academy <span className="font-normal">Blog</span>
              </span>
              <p className="text-gray-700 text-sm hidden md:block">
                Stories from our international boarding schools
              </p>
            </div>
          </div>

          {/* Right Section - Visit Button & Search */}
          <div className="flex items-center gap-6">
            <button className="border border-gray-500 px-4 py-1 rounded-full text-sm hover:bg-gray-200 transition">
              Visit EF Academy
            </button>
            <FiSearch className="text-gray-700 text-xl cursor-pointer" />
          </div>
        </div>

        {/* Bottom Navigation Links */}
        <div className="w-full flex justify-center border-t border-gray-300 pt-2">
          <div className="flex gap-6 text-gray-900 text-sm">
            <a href="#" className="hover:text-gray-600">Academics</a>
            <a href="#" className="hover:text-gray-600">Boarding Life</a>
            <a href="#" className="hover:text-gray-600">Language And Culture</a>
            <a href="#" className="hover:text-gray-600">Parents</a>
            <a href="#" className="hover:text-gray-600">Alumni</a>
            <a href="#" className="hover:text-gray-600">Oxford</a>
            <a href="#" className="hover:text-gray-600 flex items-center">
              More <span className="ml-1">▼</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDetail;
