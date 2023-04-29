import React from "react";
import heropic from "../images/heropic.jpg";
import {ImLocation} from "react-icons/im";
const Hero = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex p-24 flex-col gap-2">
        <div className=" font-bold text-[#1B1C57] text-6xl">
          <p>Find The Place To </p>
          <p className="flex gap-2">
            Live
            <span
              style={{
                WebkitTextStroke: "2px #1B1C57",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 10",
              }}
            >
              Your Dreams
            </span>
          </p>
          <p>Easily Here</p>
        </div>
        <p className="text-[#3C4563] w-[80%]">
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <div className="relative  w-[80%]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <ImLocation className="w-5 h-5 text-[#F59E0B] " />
          </div>
          <input
            type="text"
            className="block w-full p-4 pl-10 text-sm bg-white border border-gray-400  rounded-3xl text-black   h-[45px]  "
            placeholder="Search for the location you want!"
          />
          <div class="absolute inset-y-0 right-0 flex items-center pr-1 ">
            <button className="bg-green-500 cursor-pointer rounded-3xl pl-2 font-semibold text-white w-[100px] h-[40px]">
              Search {">"}
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heropic})`,
          width: "720px",
          height: "720px",
          borderRadius: "0px 0px 0px 80px",
        }}
      ></div>
    </div>
  );
};

export default Hero;
