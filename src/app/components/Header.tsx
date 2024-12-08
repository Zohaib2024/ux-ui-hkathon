import React from "react";
import { FiPhone } from "react-icons/fi";
import { TiMail } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#252B42] text-white w-full md:block hidden ">
      <div className=" flex flex-row justify-around items-center text-sm py-4">
        <div className=" flex flex-row gap-2 items-center">
          <FiPhone size={20} />
          (225) 555-0118
          <div className="ml-5 flex flex-row">
            <TiMail size={20} /> michelle.rivers@example.com
          </div>
        </div>

        <div className="">Follow us and get a chance to win 80% off</div>
        <div className=" flex flex-row  gap-2 items-center ">
          Follow us :<FaInstagram />
          <FaYoutube />
          <IoLogoFacebook />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Header;
