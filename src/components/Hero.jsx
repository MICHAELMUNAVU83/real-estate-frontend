import React from "react";
import heropic from "../images/heropic.jpg";
import { ImLocation } from "react-icons/im";
import onek from "../images/1k.png";
import house2 from "../images/house2.jpeg";
const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between items-center">
      <div className="flex md:p-24 md:justify-center md:items-center p-4 flex-col gap-2">
        <div className=" font-bold text-[#1B1C57] lexend-600 text-3xl md:text-6xl">
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
        <p className="text-[#3C4563]  lexend-400 md:w-[80%]">
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <div className="relative  lexend-500 w-[90%] md:w-[80%]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <ImLocation className="w-5 h-5 text-[#F59E0B] " />
          </div>
          <input
            type="text"
            className="block w-full p-4 pl-10 text-sm bg-white border border-gray-400  rounded-3xl text-black   h-[45px]  "
            placeholder="Search for the location!"
          />
          <div class="absolute inset-y-0 right-0 flex items-center pr-1 ">
            <button className="bg-green-500 cursor-pointer rounded-3xl pl-2 font-semibold text-white w-[100px] h-[40px]">
              Search 
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-cover  flex flex-col   p-4 justify-between bg-center bg-no-repeat md:w-[720px] md:h-[720px] w-[100%] h-[80vh] "
        style={{
          backgroundImage: `url(${heropic})`,

          borderRadius: "0px 0px 0px 80px",
        }}
      >
        <div className="flex w-[80%] gap-2 mx-auto md:text-md text-sm text-white  font-bold justify-around">
          <h1 className="border-white flex items-center lexend-600 border-2 cursor-pointer hover:scale-105 transition-all duration-300  rounded-3xl p-2">
            Featured
          </h1>
          <h1 className="border-white border-2 lexend-600  cursor-pointer hover:scale-105 transition-all duration-300 rounded-3xl p-2">
            Reviews
          </h1>
          <h1 className="border-white border-2  lexend-600 cursor-pointer hover:scale-105 transition-all duration-300 rounded-3xl p-2">
            Articles
          </h1>
          <h1 className="border-white border-2 flex lexend-600 cursor-pointer hover:scale-105 transition-all duration-300  rounded-3xl p-2">
            Ready <p>to</p>
            sell
          </h1>
        </div>
        <div className="flex md:flex-row  gap-4 flex-col justify-around">
          <div className="bg-white md:w-[40%] w-[80%] mx-auto gap-2 flex justify-between rounded-3xl p-4">
            <img src={onek} alt="" className="w-20 md:w-29  " />
            <div className="flex flex-col gap-1 justify-between">
              <h1 className="text-xl font-bold lexend-600 text-[1B1C57]">
                1k + People
              </h1>
              <p className="md:text-sm  text-xs lexend-500 text-[68799F]">
                Successfully Getting Home
              </p>
            </div>
          </div>
          <div className="bg-white  md:w-[40%] w-[80%] mx-auto gap-2 flex justify-between rounded-3xl p-4">
            <img src={house2} alt="" className="w-16 h-16 rounded-full" />
            <div className="flex flex-col  justify-between">
              <h1 className="text-xl lexend-600 font-bold text-[1B1C57]">
                56 houses
              </h1>
              <p className="text-sm lexend-500 text-[68799F]">Sold Monthly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
