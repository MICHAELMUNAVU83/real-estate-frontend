import React from "react";
import house1 from "../images/house1.jpeg";
import house2 from "../images/house2.jpeg";
import profile from "../images/profile.jpg";
import { BsClockFill } from "react-icons/bs";
const Articles = () => {
  return (
    <div className="my-24">
      <div className="flex flex-col  justify-center items-center">
        <p className="bg-[#F59E0B] w-[70px] text-sm h-[2px] rounded-2xl"></p>
        <p className="text-[#F59E0B] lexend-500 text-sm">
          See tips and trick from our partnership
        </p>
        <p className="text-3xl text-[#1B1C57] lexend-600 font-bold">Find out more about</p>
        <p className="text-3xl text-[#1B1C57] lexend-600 font-bold">selling and buying homes</p>
        <button className="p-2 my-8 lexend-600 hover:scale-105 transition-all duration-500 text-white bg-green-500 font-semibold rounded-3xl">
          More Articles
        </button>
      </div>
      <div className="w-[90%] lexend-500  mx-auto flex justify-between items-center p-4">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2">
            <img
              src={house1}
              alt=""
              className="w-[200px] h-[144px] rounded-xl"
            />
            <div className="flex justify-between flex-col">
              <div className="flex gap-4 text-[#3C4563] items-center">
                <img src={profile} alt="" className="w-10 h-10 rounded-full" />
                <p>Dianne Russel</p>
              </div>
              <p className="text-[#1B1C57] w-[80%]">
                The things we need to check when we want to buy a house
              </p>
              <div className="flex gap-2">
                <BsClockFill className="text-[#888B97] text-2xl" />
                <p>4 min read | 25 Apr 2021</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <img
              src={house1}
              alt=""
              className="w-[200px] h-[144px] rounded-xl"
            />
            <div className="flex justify-between flex-col">
              <div className="flex text-[#3C4563] gap-4 items-center">
                <img src={profile} alt="" className="w-10 h-10 rounded-full" />
                <p>Dianne Russel</p>
              </div>
              <p className="text-[#1B1C57] w-[80%]">
                The things we need to check when we want to buy a house
              </p>
              <div className="flex gap-2">
                <BsClockFill className="text-[#888B97] text-2xl" />
                <p>4 min read | 25 Apr 2021</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <img
              src={house1}
              alt=""
              className="w-[200px] h-[144px] rounded-xl"
            />
            <div className="flex justify-between flex-col">
              <div className="flex text-[#3C4563] gap-4 items-center">
                <img src={profile} alt="" className="w-10 h-10 rounded-full" />
                <p>Dianne Russel</p>
              </div>
              <p className="text-[#1B1C57] w-[80%] ">
                The things we need to check when we want to buy a house
              </p>
              <div className="flex gap-2">
                <BsClockFill className="text-[#888B97] text-2xl" />
                <p>4 min read | 25 Apr 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 ">
          <img src={house2} alt="" className="w-[560px] h-[280px] rounded-xl" />
          <div className="flex gap-4 items-center">
            <img src={profile} alt="" className="w-10 h-10 rounded-full" />
            <p>Dianne Russel</p>
          </div>
          <h1 className="text-[#1B1C57]">
            12 Things to know before buying a house
          </h1>
          <div className="text-sm text-[#626687]">
            <p>
              Want to buy a house but are unsure about what we should know, here
              I will
            </p>
            <p>
              try to explain what we should know and check when we want to buy a
              house
            </p>
          </div>
          <div className="flex gap-2">
            <BsClockFill className="text-[#888B97] text-2xl" />
            <p>4 min read | 25 Apr 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
