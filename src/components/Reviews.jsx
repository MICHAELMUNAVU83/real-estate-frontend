import React from "react";
import profile from "../images/profile.jpg";
import home from "../images/home.jpg";
import house1 from "../images/house1.jpeg";
import house2 from "../images/house2.jpeg";
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper";

// Import Swiper styles

import "swiper/css/effect-cube";
import "swiper/css/pagination";
const Reviews = () => {
  return (
    <div className="bg-[#F1FFFA] py-10 my-8 ">
      <div className="flex flex-col  justify-center items-center">
        <p className="bg-[#F59E0B] w-[70px] text-sm h-[2px] rounded-2xl"></p>
        <p className="text-[#F59E0B] lexend-500 text-sm">See our review</p>
        <p className="text-3xl w-[80%] text-center lexend-600 text-[#1B1C57] font-bold">
          What Our User Say About Us
        </p>
      </div>
      <div className="p-4  w-[90%] mx-auto ">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          loop={true}
          cubeEffect={{
            shadow: false,
            slideShadows: false,
          }}
          pagination={true}
          className="py-8"
          autoplay={{
            delay: 3000,

            disableOnInteraction: true,
          }}
          modules={[EffectCube, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className=" w-[95%] md:w-[80%] mx-auto  text-gray-900">
              <div>
                <img
                  src={house1}
                  alt=" random imgee"
                  className="w-[100%] md:h-[500px] h-[400px]   rounded-lg shadow-md"
                />

                <div className="relative mx-auto md:w-[80%] w-[90%] px-auto -mt-16  ">
                  <div className="bg-white   p-8 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <h1 className="md:text-3xl text-sm lexend-600 font-bold text-[#1B1C57]">
                        Best! I got the house I wanted
                      </h1>
                    </div>

                    <h4 className="mt-1 md:w-[50%] lexend-400 md:text-sm text-xs text-[##626687] ">
                      Through this website I can get a house with the type and
                      specifications I want very easily, without a complicated
                      process to be able to find information on the house we
                      want.
                    </h4>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex gap-4">
                        <img
                          src={profile}
                          alt=""
                          className="md:w-12 md:h-12 w-8 h-8 rounded-full"
                        />
                        <div className="flex flex-col ">
                          <h1 className="lexend-600 md:text-md text-sm font-semibold">
                            Diana Russel
                          </h1>
                          <h1 className="text-[#888B97] lexend-400 text-xs md:text-sm">
                            Dianne Russel
                          </h1>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <IoIosStar className="text-[#F59E0B] text-2xl" />
                        <p className="text-[#3C4563] lexend-600 font-bold">
                          4.6
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-[95%] md:w-[80%] mx-auto  text-gray-900">
              <div>
                <img
                  src={home}
                  alt=" random imgee"
                  className="w-[100%] md:h-[500px] h-[400px]   rounded-lg shadow-md"
                />

                <div className="relative mx-auto md:w-[80%] w-[90%] px-auto -mt-16  ">
                  <div className="bg-white   p-8 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <h1 className="md:text-3xl text-sm lexend-600 font-bold text-[#1B1C57]">
                        Best! I got the house I wanted
                      </h1>
                    </div>

                    <h4 className="mt-1 md:w-[50%] lexend-400 md:text-sm text-xs text-[##626687] ">
                      Through this website I can get a house with the type and
                      specifications I want very easily, without a complicated
                      process to be able to find information on the house we
                      want.
                    </h4>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex gap-4">
                        <img
                          src={profile}
                          alt=""
                          className="md:w-12 md:h-12 w-8 h-8 rounded-full"
                        />
                        <div className="flex flex-col ">
                          <h1 className="lexend-600 md:text-md text-sm font-semibold">
                            Diana Russel
                          </h1>
                          <h1 className="text-[#888B97] lexend-400 text-xs md:text-sm">
                            Dianne Russel
                          </h1>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <IoIosStar className="text-[#F59E0B] text-2xl" />
                        <p className="text-[#3C4563] lexend-600 font-bold">
                          4.6
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-[95%] md:w-[80%] mx-auto  text-gray-900">
              <div>
                <img
                  src={house2}
                  alt=" random imgee"
                  className="w-[100%] md:h-[500px] h-[400px]   rounded-lg shadow-md"
                />

                <div className="relative mx-auto md:w-[80%] w-[90%] px-auto -mt-16  ">
                  <div className="bg-white   p-8 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <h1 className="md:text-3xl text-sm lexend-600 font-bold text-[#1B1C57]">
                        Best! I got the house I wanted
                      </h1>
                    </div>

                    <h4 className="mt-1 md:w-[50%] lexend-400 md:text-sm text-xs text-[##626687] ">
                      Through this website I can get a house with the type and
                      specifications I want very easily, without a complicated
                      process to be able to find information on the house we
                      want.
                    </h4>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex gap-4">
                        <img
                          src={profile}
                          alt=""
                          className="md:w-12 md:h-12 w-8 h-8 rounded-full"
                        />
                        <div className="flex flex-col ">
                          <h1 className="lexend-600 md:text-md text-sm font-semibold">
                            Diana Russel
                          </h1>
                          <h1 className="text-[#888B97] lexend-400 text-xs md:text-sm">
                            Dianne Russel
                          </h1>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <IoIosStar className="text-[#F59E0B] text-2xl" />
                        <p className="text-[#3C4563] lexend-600 font-bold">
                          4.6
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
