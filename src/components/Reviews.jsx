import React from "react";
import profile from "../images/profile.jpg";
import home from "../images/home.jpg";
import { IoIosStar } from "react-icons/io";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
const Reviews = () => {
  return (
    <div className="bg-[#F1FFFA] my-8 ">
      <div className="p-4  w-[80%] mx-auto ">
        <Splide
          options={{
            rewind: true,
            loop: "true",
            perPage: 1,
            perMove: 1,
            height: "72vh",
            arrows: false,
            drag: true,
            autoplay: true,
            speed: 1000,

            interval: 2000,
            gap: "1rem",
            pagination: true,
            padding: {
              right: "5rem",
              left: "5rem",
            },
          }}
        >
          <SplideSlide>
            <div className="w-[80%] mx-auto  text-gray-900">
              <div>
                <img
                  src={home}
                  alt=" random imgee"
                  className="w- object-cover object-center rounded-lg shadow-md"
                />

                <div className="relative px-4 -mt-16  ">
                  <div className="bg-white  p-8 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <h1 className="text-3xl font-bold text-[#1B1C57]">
                        Best! I got the house I wanted
                      </h1>
                    </div>

                    <h4 className="mt-1 text-sm text-[##626687] ">
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
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex flex-col ">
                          <h1>Diana Russel</h1>
                          <h1 className="text-[#888B97] text-sm">
                            Dianne Russel
                          </h1>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <IoIosStar className="text-[#F59E0B] text-2xl" />
                        <p className="text-[##3C4563] font-bold">4.6</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-[80%] mx-auto h-[70vh]  text-gray-900">
              <div>
                <img
                  src={home}
                  alt=" random imgee"
                  className=" object-cover object-center rounded-lg shadow-md"
                />

                <div className="relative px-4 -mt-16  ">
                  <div className="bg-white  p-8 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <h1 className="text-3xl font-bold text-[#1B1C57]">
                        Best! I got the house I wanted
                      </h1>
                    </div>

                    <h4 className="mt-1 text-sm text-[##626687] ">
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
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex flex-col ">
                          <h1>Diana Russel</h1>
                          <h1 className="text-[#888B97] text-sm">
                            Dianne Russel
                          </h1>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <IoIosStar className="text-[#F59E0B] text-2xl" />
                        <p className="text-[##3C4563] font-bold">4.6</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-[80%] mx-auto  text-gray-900">
              <div>
                <img
                  src={home}
                  alt=" random imgee"
                  className="w- object-cover object-center rounded-lg shadow-md"
                />

                <div className="relative px-4 -mt-16  ">
                  <div className="bg-white  p-8 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <h1 className="text-3xl font-bold text-[#1B1C57]">
                        Best! I got the house I wanted
                      </h1>
                    </div>

                    <h4 className="mt-1 text-sm text-[##626687] ">
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
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex flex-col ">
                          <h1>Diana Russel</h1>
                          <h1 className="text-[#888B97] text-sm">
                            Dianne Russel
                          </h1>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <IoIosStar className="text-[#F59E0B] text-2xl" />
                        <p className="text-[##3C4563] font-bold">4.6</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Reviews;
