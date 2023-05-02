import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="w-[80%] md:flex-row gap-8 flex-col mx-auto flex justify-between items-center p-4">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <p
            style={{
              width: "32px",
              height: "32px",
              background: "#4BE4C9",
              borderRadius: "4px 4px 24px 4px",
            }}
          ></p>
        </div>
        <p className="text-[#626687] md:w-[50%]">
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </p>

        <div className="flex gap-2">
          <AiOutlineTwitter className="text-[#3C4563] text-2xl" />
          <RiInstagramFill className="text-[#3C4563] text-2xl" />
          <FaFacebookF className="text-[#3C4563] text-2xl" />
        </div>
      </div>
      <div className="flex  gap-4">
        <div className="flex text-[#888B97] flex-col gap-2">
          <h1 className="text-[#0E1735] font-bold">Property</h1>
          <p>House</p>
          <p>Apartment</p>
          <p>Villa</p>
        </div>
        <div className="flex text-[#888B97] flex-col gap-2">
          <h1 className="text-[#0E1735] font-bold">Article</h1>
          <p className="flex gap-2">News <p> Article</p></p>
          <p className="flex gap-2">Popular <p> Article</p></p>
          <p className="flex gap-2">Most <p> Read</p></p>
          <p className="flex gap-2">Tips & <p> Tricks</p></p>
        </div>
        <div className="flex text-[#888B97] flex-col gap-2">
          <h1 className="text-[#0E1735] font-bold">Property</h1>
          <p>House</p>
          <p>Apartment</p>
          <p>Villa</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
