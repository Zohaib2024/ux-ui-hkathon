import React from "react";
import Image from "next/image";

const Classic = () => {
  return (
    <div className="">
      {/* Overlay Content */}
      <div className=" flex justify-center md:justify-around items-center bg-[#23856D] w-full md:h-[780px] mt-10">
        <div className="grid md:grid-flow-col text-center md:text-start grid-cols-1 md:grid-cols-2 gap-4 text-white  text-2xl  mt-24">
          <div className=" flex flex-col  justify-center items-center md:items-start space-y-7">
            <h5 className="text-md">SUMMER 2020</h5>
            <h1 className="text-5xl font-bold">
              Vita Classic <br />
              Product
            </h1>
            <p className="text-sm">
              We know how large objects will act,
              <br /> but things on a small scale.
            </p>
            <div className="flex flex-row gap-5 items-center">
              <h2 className="font-bold">$16.48</h2>
              <button className="bg-[#2DC071] py-2 px-8 rounded-xl text-lg font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="w-auto h-auto">
            <Image
              src="/herosection2.png"
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

export default Classic;
