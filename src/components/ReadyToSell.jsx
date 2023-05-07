import React from "react";
import { BiBed } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import { RiCarLine } from "react-icons/ri";
import { GiStairs } from "react-icons/gi";
import profileimg from "../images/profile.jpg";
import home from "../images/home.jpg";
import { BsTelephoneFill } from "react-icons/bs";
const ReadyToSell = () => {
  return (
    <div id="readytosell" className="my-24 mx-auto ">
      <div className="p-4 md:w-[90%] w-[90%] mx-auto md:flex-row flex-col flex justify-between ">
        <div className="flex flex-col">
          <div className="flex gap-1 lexend-500 items-center">
            <p className="bg-[#F59E0B] w-[30px] text-sm h-[2px] rounded-2xl"></p>
            <p>Ready To Sell</p>
          </div>
          <h1 className="text-3xl text-[#1B1C57] lexend-600 font-bold">
            Let's tour and see our house!
          </h1>
          <p className="md:w-[50%] lexend-500 text-sm text-[#626687]">
            Houses recommended by our partners that have been curated to become
            the home of your dreams!
          </p>
          <h1 className="text-[#1B1C57] lexend-600 font-bold text-xl">
            House Detail
          </h1>
          <div className="flex lexend-500 justify-between w-[80%] md:w-[50%] my-4">
            <div className="flex justify-center gap-1">
              <BiBed className="text-[#888B97] text-2xl" />
              <p className="text-[#3C4563] text-sm font-bold">4 bedrooms </p>
            </div>

            <div className="flex justify-center gap-1">
              <GiBathtub className="text-[#888B97] text-2xl" />
              <p className="text-[#3C4563] text-sm font-bold">2 bathrooms </p>
            </div>
          </div>
          <div className="flex justify-between w-[80%] md:w-[50%]">
            <div className="flex justify-center gap-1">
              <RiCarLine className="text-[#888B97] text-2xl" />
              <p className="text-[#3C4563] text-sm font-bold">1 carport </p>
            </div>

            <div className="flex justify-center gap-1">
              <GiStairs className="text-[#888B97] text-2xl" />
              <p className="text-[#3C4563] text-sm font-bold">2 Floors </p>
            </div>
          </div>
          <hr className="border-[#E5E7EB] w-[50%] my-4" />

          <div className="flex justify-between w-[90%] md:w-[50%]">
            <div className="flex justify-center gap-1">
              <div className="flex gap-4">
                <img
                  src={profileimg}
                  alt=""
                  className="md:w-10 md:h-10 w-8 h-8 rounded-full"
                />
                <div className="flex flex-col ">
                  <h1 className="lexend-500  text-[#0E1735]">Michael Munavu</h1>
                  <h1 className="text-[#888B97] lexend-400 text-sm">Manager</h1>
                </div>
              </div>
            </div>

            <div>
              <button className="bg-green-500 py-2 px-2 md:text-md text-xs lexend-500 text-white flex items-center gap-2 rounded-3xl">
                <BsTelephoneFill className="md:text-xl text-sm" />
                <h1>Contact Now</h1>
              </button>
            </div>
          </div>
        </div>

        <div className="relative  mx-auto md:mt-0 mt-4 ">
          <video
            src="https://res.cloudinary.com/dakiak4mc/video/upload/v1682426318/video6.0f17da99ad9be3169f22_desxmt.mp4"
            controls
            className="rounded-lg md:w-[500px]  mx-auto md:h-[400px] h-[300px] object-cover"
            autoPlay
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default ReadyToSell;
