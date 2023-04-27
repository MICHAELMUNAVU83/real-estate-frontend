import React from "react";
import { BiBed } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import { RiCarLine } from "react-icons/ri";
import { GiStairs } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import profileimg from "../images/profile.jpg";
import home from "../images/home.jpg";
import ReactPlayer from "react-player";
const ReadyToSell = () => {
  return (
    <div className="p-4 w-[80%] mx-auto flex justify-between shadow-xl shadow-gray-200">
      <div className="flex flex-col">
        <div className="flex gap-1 items-center">
          <p className="bg-[#F59E0B] w-[30px] text-sm h-[2px] rounded-2xl"></p>
          <p>Ready To Sell</p>
        </div>
        <h1 className="text-3xl font-bold">Let's tour and see our house!</h1>
        <p className="w-[50%] text-sm text-[#626687]">
          Houses recommended by our partners that have been curated to become
          the home of your dreams!
        </p>
        <h1 className="text-[#1B1C57] font-bold text-xl">House Detail</h1>
        <div className="flex justify-between w-[50%] my-4">
          <div className="flex justify-center gap-1">
            <BiBed className="text-[#888B97] text-2xl" />
            <p className="text-[#3C4563] text-sm font-bold">4 bedrooms </p>
          </div>

          <div className="flex justify-center gap-1">
            <BiBed className="text-[#888B97] text-2xl" />
            <p className="text-[#3C4563] text-sm font-bold">4 bedrooms </p>
          </div>
        </div>
        <div className="flex justify-between w-[50%]">
          <div className="flex justify-center gap-1">
            <BiBed className="text-[#888B97] text-2xl" />
            <p className="text-[#3C4563] text-sm font-bold">4 bedrooms </p>
          </div>

          <div className="flex justify-center gap-1">
            <BiBed className="text-[#888B97] text-2xl" />
            <p className="text-[#3C4563] text-sm font-bold">4 bedrooms </p>
          </div>
        </div>
        <hr className="border-[#E5E7EB] w-[50%] my-4" />

        <div className="flex justify-between w-[50%]">
          <div className="flex justify-center gap-1">
            <div className="flex gap-4">
              <img src={profileimg} alt="" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col ">
                <h1>Diana Russel</h1>
                <h1 className="text-[#888B97] text-sm">Dianne Russel</h1>
              </div>
            </div>
          </div>

          <div>
            <button className="bg-green-500 py-4 px-2 font-bold text-white flex gap-2 rounded-3xl">
              <h1>Contact Now</h1>
              <FiPhone className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative ">
        <video
          src="https://res.cloudinary.com/dakiak4mc/video/upload/v1682426318/video6.0f17da99ad9be3169f22_desxmt.mp4"
          controls
          width="500px"
          className="rounded-lg"
          autoPlay
          loop
          height="100%"
        />

        <img
          src={home}
          alt=""
          className=" w-[250px] rounded-lg absolute bottom-0 right-0 "
        />
        <img
          src={home}
          alt=""
          className=" w-[150px] rounded-lg absolute bottom-0 right-1/2 "
        />
        <img
          src={home}
          alt=""
          className="  w-[100px] rounded-lg  absolute bottom-0 left-0 "
        />
      </div>
    </div>
  );
};

export default ReadyToSell;
