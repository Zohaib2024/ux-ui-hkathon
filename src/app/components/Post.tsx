"use client"; // Ensure compatibility with Next.js App Router

import React from "react";
import Image from "next/image";
import { LuAlarmClock } from "react-icons/lu";

const Post = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-4 md:mx-20 lg:mx-32">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mt-20 text-center">
        <h3 className="font-semibold text-[#23A6F0]">Practice Advice</h3>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Featured Posts</h1>
        <p className="mt-3 text-gray-600">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Post Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="relative border rounded-lg shadow-md overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-full h-[300px]">
              <Image
                src={`/pic${item}.png`}
                alt={`Post ${item}`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </div>
            </div>

            {/* Post Details */}
            <div className="p-5">
              <div className="flex flex-row gap-4 text-sm text-gray-500 mb-2">
                <span className="text-blue-500">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>

              <h2 className="text-2xl font-semibold mb-2">
                Loudest à la Madison #1 <br /> (L'integral)
              </h2>

              <p className="text-gray-600 mb-4">
                We focus on ergonomics and meeting <br /> you where you work.
                only a <br />
                keystroke away.
              </p>

              <div className="flex justify-between text-gray-500 mb-2">
                <div className="flex items-center gap-2">
                  <LuAlarmClock className="text-blue-600" />
                  <span>22 April 2021</span>
                </div>
                <span>10 comments</span>
              </div>

              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
