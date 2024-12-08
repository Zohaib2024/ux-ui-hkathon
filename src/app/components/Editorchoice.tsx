import React from "react";
import Image from "next/image";

const Editorchoice = () => {
  return (
    <div className="flex justify-center items-center flex-col   space-y-4 bg-gray-100 ">
      <div className="flex flex-col text-center my-10 ">
        <h1 className="font-semibold text-4xl">EDITOR’S PICK</h1>
        <p className="text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-10 md:mx-0 w-auto md:w-[1000px] font-bold  gap-3  ">
        <div className="md:col-span-2 relative">
          <Image
            className="w-full md:w-auto  md:h-full "
            src="/filter 1.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="absolute bottom-2 left-2 bg-white text-black w-20 h-6 text-center  text-sm ">
            MEN
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-full md:w-auto  md:h-full"
            src="/filter 2.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="absolute bottom-2 left-2 bg-white text-black w-20 h-5 text-center  text-sm ">
            WOMEN
          </div>
        </div>

        <div className="grid grid-rows-2  h-full  gap-3 ">
          <div className="relative">
            <Image
              className=" w-full md:w-auto md:h-full "
              src="/filter 3.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className="absolute bottom-2 left-2 bg-white text-black  md:w-32  h-6 text-center  text-sm ">
              ACCESSORIES
            </div>
          </div>
          <div className="relative ">
            <Image
              className=" w-full md:w-auto "
              src="/filter 4.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className="absolute bottom-2 left-2 bg-white text-black w-16 h-6 text-center  text-sm ">
              KIDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editorchoice;
