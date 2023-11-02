import React, { useEffect } from "react";
import {
  LightIcon,
  RaveIcon,
  RepaetIcon,
  RequestImageIcon,
} from "../../../assets";
import Aos from "aos";

export const Example = () => {
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
      className="p-4  grid content-center min-h-screen"
      style={{
        backgroundImage: `url( ${LightIcon})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.9,
      }}
    >
      <h1
        data-aos="zoom-in-up"
        className="text-5xl font-bold text-white text-center"
      >
        Beat the Blues, Feel Renewed: Your Fav Song, Your Happy Brew!
      </h1>
      <div className="flex justify-center gap-4  mt-9 flex-wrap">
        <div className="w-full md:w-96 p-4 h-96 bg-[#76697ac8] rounded-lg">
          <div className="flex justify-between">
            <h1 data-aos="fade-up" className="text-4xl font-bold text-white">
              Request
            </h1>
            <span className="w-28">
              <img src={RequestImageIcon} alt="" />
            </span>
          </div>
          <p data-aos="fade-up" className="text-lg mt-8 text-center text-white">
            Whatever the scale and nature of your projects, our specialists have
            the skills and experience necessary to successfully solve your
            problems.
          </p>
        </div>
        <div className="w-full md:w-96 p-4 h-96 bg-[#76697ac8] rounded-lg">
          <div className="flex justify-between">
            <h1 data-aos="fade-up" className="text-4xl font-bold text-white">
              Rave
            </h1>
            <span className="w-28">
              <img src={RaveIcon} alt="" />
            </span>
          </div>
          <p data-aos="fade-up" className="text-lg mt-8 text-center text-white">
            Whatever the scale and nature of your projects, our specialists have
            the skills and experience necessary to successfully solve your
            problems.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="w-full md:w-96 p-4 h-96 bg-[#76697ac8] rounded-lg"
        >
          <div className="flex justify-between">
            <h1 data-aos="fade-up" className="text-4xl font-bold text-white">
              Repeat
            </h1>
            <span className="w-28 animate-spin object-contain">
              <img
                src={RepaetIcon}
                className="h-full w-full object-contain"
                alt=""
              />
            </span>
          </div>
          <p data-aos="fade-up" className="text-lg mt-8 text-center text-white">
            Whatever the scale and nature of your projects, our specialists have
            the skills and experience necessary to successfully solve your
            problems.
          </p>
        </div>
      </div>
    </div>
  );
};
