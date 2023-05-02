import React from "react";
import { AiFillFire } from "react-icons/ai";
import house1 from "../images/house1.jpeg";
import profile from "../images/profile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { BsFillHouseFill } from "react-icons/bs";
import { MdOutlineVilla } from "react-icons/md";
import { MdApartment } from "react-icons/md";

// import required modules
import { Pagination, Autoplay } from "swiper";
const Featured = () => {
  return (
    <div>
      <div className="mx-auto w-[90%] my-20">
        <div className="flex md:flex-row flex-col justify-between">
          <div>
            <div className="flex gap-1  items-center">
              <p className="bg-[#F59E0B] w-[30px] text-sm h-[2px] rounded-2xl"></p>
              <p className="lexend-500">Our Recommendations</p>
            </div>
            <h1 className="text-3xl lexend-600 text-[#1B1C57] mb-4 font-bold">
              Featured Properties
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center lexend-500 cursor-pointer bg-[#D1FAE5] h-[70%] text-[#10B981] p-2 rounded-3xl">
              <BsFillHouseFill className=" text-2xl" />
              <p>House</p>
            </div>

            <div className="flex gap-2 lexend-500 items-center  cursor-pointer h-[70%] border-[#E0E3EB] border-2 p-2  rounded-3xl">
              <MdOutlineVilla className="text-[#888B97] text-2xl" />
              <p>Villa</p>
            </div>
            <div className="flex cursor-pointer items-center gap-2 lexend-500  h-[70%] border-[#E0E3EB] border-2 p-2  rounded-3xl">
              <MdApartment className="text-[#888B97] text-2xl" />
              <p>Apartment</p>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 1200px

            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="my-4"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide className="w-[33%]">
            <div className="flex flex-col gap-2">
              <div className="relative">
                <img
                  src={house1}
                  alt=""
                  className="w-[100%] h-[382px] rounded-2xl"
                />
                <p className="absolute bottom-12 left-4 text-[#EF4444] flex  gap-2 bg-[#FEE2E2] rounded-3xl p-2">
                  <AiFillFire className="text-2xl" />
                  <span className="text-[#EF4444] lexend-500 ">Hot Deal</span>
                </p>
              </div>
              <p className="text-[#0E1735] font-bold">Roselands House</p>
              <p className="text-[#3C4563]">$ 35.000.000</p>
              <div className="flex gap-4 text-[#3C4563] items-center">
                <img src={profile} alt="" className="w-10 h-10 rounded-full" />
                <div className="flex text-sm flex-col">
                  <p>Dianne Russel</p>
                  <p className="text-[#888B97]">2 days ago</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[33%]">
            <div className="flex flex-col gap-2">
              <div className="relative">
                <img
                  src={house1}
                  alt=""
                  className="w-[100%] h-[382px] rounded-2xl"
                />
                <p className="absolute bottom-12 left-4 text-[#EF4444] flex  gap-2 bg-[#FEE2E2] rounded-3xl p-2">
                  <AiFillFire className="text-2xl" />
                  <span className="text-[#EF4444] lexend-500 ">Hot Deal</span>
                </p>
              </div>
              <p className="text-[#0E1735] font-bold">Roselands House</p>
              <p className="text-[#3C4563]">$ 35.000.000</p>
              <div className="flex gap-4 text-[#3C4563] items-center">
                <img src={profile} alt="" className="w-10 h-10 rounded-full" />
                <div className="flex text-sm flex-col">
                  <p>Dianne Russel</p>
                  <p className="text-[#888B97]">2 days ago</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[33%]">
            <div className="flex flex-col gap-2">
              <div className="relative">
                <img
                  src={house1}
                  alt=""
                  className="w-[100%] h-[382px] rounded-2xl"
                />
                <p className="absolute bottom-12 left-4 bg-[#D1FAE5] flex  gap-2 text-[#047857] rounded-3xl p-2">
                  <AiFillFire className="text-2xl" />
                  <span className=" lexend-500 ">Best Deals</span>
                </p>
              </div>
              <p className="text-[#0E1735] font-bold">Roselands House</p>
              <p className="text-[#3C4563]">$ 35.000.000</p>
              <div className="flex gap-4 text-[#3C4563] items-center">
                <img src={profile} alt="" className="w-10 h-10 rounded-full" />
                <div className="flex text-sm flex-col">
                  <p>Dianne Russel</p>
                  <p className="text-[#888B97]">2 days ago</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[33%]">
            <div className="flex flex-col gap-2">
              <div className="relative">
                <img
                  src={house1}
                  alt=""
                  className="w-[100%] h-[382px] rounded-2xl"
                />
                <p className="absolute bottom-12 left-4 text-[#1D4ED8] flex  gap-2 bg-[#DBEAFE] rounded-3xl p-2">
                  <AiFillFire />
                  <span className=" font-bold">New House</span>
                </p>
              </div>
              <p className="text-[#0E1735] font-bold">Roselands House</p>
              <p className="text-[#3C4563]">$ 35.000.000</p>
              <div className="flex gap-4 text-[#3C4563] items-center">
                <img src={profile} alt="" className="w-10 h-10 rounded-full" />
                <div className="flex text-sm flex-col">
                  <p>Dianne Russel</p>
                  <p className="text-[#888B97]">2 days ago</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
