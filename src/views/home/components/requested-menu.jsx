import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const RequestedMenu = () => {
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
      className="flex relative  flex-col justify-center  h-screen"
      style={{
        backgroundImage: `url("https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
        backgroundSize: "cover",
      }}
    >
      <div className=" bg-[#76697a90] h-screen p-4 grid content-center">
        <h1
          data-aos="zoom-in"
          className="text-4xl font-bold text-white text-center"
        >
          Don't Play With Fire, Play With Taste.
        </h1>
        <div className="flex mt-20 bg-[#000] w-full md:w-1/2 m-auto items-center justify-center">
          <Link
            to="/category"
            className="rounded-md  p-4 flex cursor-pointer flex-col items-center"
          >
            <p className="text-white text-2xl font-bold">Order Food</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
