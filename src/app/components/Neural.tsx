import React from "react";
import Image from "next/image";

const Neural = () => {
  return (
    <div className="mt-20">
      {/* Overlay Content */}
      <div className=" flex justify-center md:justify-around items-center  w-full md:h-auto ">
        <div className="grid md:grid-flow-col text-center md:text-start grid-cols-1 md:grid-cols-2 gap-32 text-black  text-2xl  ">
          <div className="w-auto h-auto md:block hidden">
            <Image
              src="/womennmen.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" "
            />
          </div>
          <div className=" flex flex-col  justify-center items-center md:items-start space-y-7">
            <h5 className="text-md text-gray-300">SUMMER 2020</h5>
            <h1 className="text-5xl font-bold">
              Part of the Neural <br />
              Universal
            </h1>
            <p className="text-lg text-gray-500">
              We know how large objects will act,
              <br /> but things on a small scale.
            </p>
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <button className="bg-[#2DC071] py-2 px-8 rounded-xl text-lg font-semibold text-white">
                BUY NOW
              </button>
              <button className=" border-2 border-[#2DC071] py-2 px-8 rounded-xl text-lg font-semibold text-[#2DC071]">
                READ MORE
              </button>
            </div>
          </div>
          <div className="w-auto h-auto md:hidden block">
            <Image
              src="/womennmen.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neural;
