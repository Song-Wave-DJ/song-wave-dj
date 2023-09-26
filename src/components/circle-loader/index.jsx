import React from "react";
import { Logo } from "@/assets";

const CircleLoader = () => {
  return (
    <div className="h-screen bg-[#1C1C28] flex justify-center items-center">
      <img src={Logo} className="w-20 h-20 object-cover" />
    </div>
  );
};

export default CircleLoader;
