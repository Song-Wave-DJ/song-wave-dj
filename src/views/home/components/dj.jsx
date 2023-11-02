import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DiskIcon } from "../../../assets";
import Aos from "aos";

export const DJSongs = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      Aos.init({
        duration: 1000,
        offset: 100,
      });
    });
  }, []);

  return (
    <div
      className="flex-col h-screen  grid content-center relative "
      style={{
        backgroundImage: `url( ${DiskIcon})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.9,
      }}
    >
      <div className="bg-[#76697a90] p-4 h-screen  grid content-center">
        <h2
          data-aos="flip-right"
          className="animate-fade-up text-center text-white text-6xl font-bold"
        >
          Our DJ Your Songs
        </h2>
        <ul className="flex gap-7 justify-center text-xl items-center">
          <li className="text-white ">Request</li>
          <li className="text-white ">Rave</li>
          <li className="text-white ">Repeat</li>
        </ul>
        <div className="flex mt-20 items-center bg-[#000] w-full md:w-1/2 m-auto justify-center">
          <Link
            to="/three-hours"
            className="rounded-md px-10 p-4 flex cursor-pointer flex-col items-center "
          >
            <p className="text-white text-2xl font-bold">
              Change Mood <br />
              (Request Songs)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
