import React from "react";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-40 py-4">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="w-2/12">
          <Image
            src="/Bandage.png"
            width={100}
            height={500}
            alt="Logo"
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex md:w-6/12 justify-center space-x-8 text-sm font-medium text-gray-600">
          {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map((item) => (
            <a href="#" key={item} className="hover:text-sky-600">
              {item}
            </a>
          ))}
        </div>

        {/* Action Icons */}
        <div className="w-4/12 flex justify-end items-center space-x-6 text-sky-600">
          <div className="hidden md:flex items-center space-x-2">
            <CiUser size={20} />
            <a href="#" className="text-sm font-medium">
              Login / Register
            </a>
          </div>

          <button>
            <CiSearch size={22} />
          </button>

          <div className="relative flex items-center">
            <BsCart size={20} />
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white px-1 rounded-full">
              1
            </span>
          </div>

          <div className="hidden md:flex relative items-center">
            <CiHeart size={22} />
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white px-1 rounded-full">
              1
            </span>
          </div>
          <div className="flex md:hidden items-center">
            <HiMenuAlt3 size={22} />
            <span className="   text-xs  text-white  ">1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
