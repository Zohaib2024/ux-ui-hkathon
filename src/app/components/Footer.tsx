import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className=" h-32 mt-20 flex flex-col md:flex-row  justify-center md:justify-center gap-0 md:gap-[1000px]  ml-10 md:ml-0  items-start md:items-center">
          <div>
            <Image
              src="/Bandage.png"
              width={130}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-row items-center gap-5">
            <FaFacebook size={30} className="text-blue-500" />
            <FaInstagram size={30} className="text-blue-500" />
            <FaTwitter size={30} className="text-blue-500" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 text-lg my-10 mx-10 md:mx-40">
        <ul className="space-y-2">
          <li className="font-bold my-5 ">Company info</li>
          <li>About us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-bold my-5">Legal</li>
          <li>About us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-bold my-5">Features</li>
          <li>business Marketing</li>
          <li>User Analytics</li>
          <li>Live Chat</li>
          <li>Unlimited Support</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-bold my-5">Resources</li>
          <li>IOS & Android</li>
          <li>Watch a Demo</li>
          <li>Customers</li>
          <li>Api</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-bold my-5">Get in Touch</li>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Your Email"
              className=" bg-gray-100 w-52 p-5"
            />
            <button className="bg-[#23A6F0] p-3 text-white">Subscribe</button>
          </div>
          <p className="text-sm">Lore imp sum dolor Amit</p>
        </ul>
      </div>
      <div className="bg-gray-100 h-20 flex justify-start items-center">
        <p className="mx-32 md:mx-40 text-center md:text-start">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
