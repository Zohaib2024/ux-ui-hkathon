import React from "react";
import Image from "next/image";
import { LuAlarmClock } from "react-icons/lu";

const Post = () => {
  return (
    <div className="flex flex-col justify-center items-center  mx-10 md:mx-32">
      <div className="flex flex-col justify-center items-center mt-20 ">
        <h3
          className="font-semibold text-[#23A6F0]
]"
        >
          Practise Advice
        </h3>
        <h1 className="text-5xl font-bold mt-5">Featured Posts</h1>
        <p className="mt-3 text-center">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-y-5">
        <div className="border-2  ">
          <Image
            className="relative"
            src="/pic1.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="absolute">NEW </div>
          <div className="flex flex-row gap-3 p-5">
            <ul className="text-blue-500">Google</ul>
            <ul>Trending</ul>
            <ul>New</ul>
          </div>
          <div className="text-2xl p-3">
            Loudest à la Madison #1 <br /> (L'integral)
          </div>
          <div className="p-3">
            We focus on ergonomics and meeting <br /> you where you work. It's
            only a <br />
            keystroke away.
          </div>
          <div className="flex justify-between  p-3">
            <div className="flex flex-row items-center gap-2">
              <LuAlarmClock className="text-blue-600" />
              22 April 2021
            </div>
            <div>10 comments</div>
          </div>
          <div className="p-2">Learn more </div>
        </div>
        <div className="border-2  ">
          <Image
            src="/pic2.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="flex flex-row gap-3 p-5">
            <ul className="text-blue-500">Google</ul>
            <ul>Trending</ul>
            <ul>New</ul>
          </div>
          <div className="text-2xl p-3">
            Loudest à la Madison #1 <br /> (L'integral)
          </div>
          <div className="p-3">
            We focus on ergonomics and meeting <br /> you where you work. It's
            only a <br />
            keystroke away.
          </div>
          <div className="flex justify-between  p-3">
            <div className="flex flex-row items-center gap-2">
              <LuAlarmClock className="text-blue-600" />
              22 April 2021
            </div>
            <div>10 comments</div>
          </div>
          <div className="p-2">Learn more </div>
        </div>
        <div className="border-2  ">
          <Image
            src="/pic3.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="flex flex-row gap-3 p-5">
            <ul className="text-blue-500">Google</ul>
            <ul>Trending</ul>
            <ul>New</ul>
          </div>
          <div className="text-2xl p-3">
            Loudest à la Madison #1 <br /> (L'integral)
          </div>
          <div className="p-3">
            We focus on ergonomics and meeting <br /> you where you work. It's
            only a <br />
            keystroke away.
          </div>
          <div className="flex justify-between  p-3">
            <div className="flex flex-row items-center gap-2">
              <LuAlarmClock className="text-blue-600" />
              22 April 2021
            </div>
            <div>10 comments</div>
          </div>
          <div className="p-2">Learn more </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
