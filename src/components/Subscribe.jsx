import React from "react";
import { GoMail } from "react-icons/go";
import subscribeimg from "../images/subscribeimg.jpg";
const Subscribe = () => {
  return (
    <div className="w-[80%] rounded-2xl my-8 flex justify-around items-center  h-[250px] mx-auto bg-gradient bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-100">
      <div className="flex gap-12">
        <div className="flex flex-col gap-12 items-center">
          <img
            src={subscribeimg}
            alt=""
            className="w-20 h-20 border-2 border-white rounded-3xl"
          />
          <img
            src={subscribeimg}
            alt=""
            className="w-12 h-12 border-2 border-white rounded-full"
          />
        </div>
        <div className="flex flex-col gap-8 items-center">
          <img
            src={subscribeimg}
            alt=""
            className="w-8 h-8 border-2 border-white rounded-full"
          />
          <img
            src={subscribeimg}
            alt=""
            className="w-20 h-20 border-2 border-white rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col ">
          <h1 className="font-bold text-2xl">Subscribe For More Info</h1>
          <h1 className="text-2xl font-bold">and update from Hounter</h1>
        </div>
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <GoMail className="w-5 h-5 text-blue-500 " />
          </div>
          <input
            type="text"
            class="block w-full p-4 pl-10 text-sm bg-white border border-gray-400  rounded-3xl text-black  w-[400px] h-[45px]  "
            placeholder="Enter your email address"
          />
          <div class="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
            <button className="bg-green-500 rounded-3xl pl-2 font-semibold text-white w-[100px] h-[40px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-4 items-end">
          <img src={subscribeimg} alt="" className="w-16 h-16  rounded-2xl" />
          <img src={subscribeimg} alt="" className="w-8 h-8 rounded-full" />
        </div>
        <div className="flex flex-col gap-4 items-center mt-8">
          <img
            src={subscribeimg}
            alt=""
            className="w-8 h-8 border-2 border-white rounded-full"
          />
          <img
            src={subscribeimg}
            alt=""
            className="w-12 h-12 border-2 border-white rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
