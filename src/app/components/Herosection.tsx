import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <div className=" relative">
      {/* Background Image */}
      <Image
        src="/main2.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-full h-[500px] lg:w-full md:h-[700px]"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex justify-center md:justify-around items-center">
        <div className="grid md:grid-flow-col text-center md:text-start grid-cols-1 md:grid-cols-2 gap-4 text-white  text-2xl ">
          <div className=" space-y-7">
            <h5 className="text-md">SUMMER 2020</h5>
            <h1 className="text-5xl font-bold">NEW COLLECTION</h1>
            <p className="text-sm">
              We know how large objects will act,
              <br /> but things on a small scale.
            </p>
            <button className="bg-[#2DC071] py-2 px-8 rounded-xl text-lg font-semibold">
              SHOP NOW
            </button>
          </div>
          <div className="w-28"></div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
