import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { LuCakeSlice } from "react-icons/lu";
import { BiSolidDrink } from "react-icons/bi";
import { FaPizzaSlice, FaUtensils } from "react-icons/fa6";
import { LuSoup } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { LuSalad } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-slate-300 fixed bottom-0 flex items-center justify-around z-50">
      <Link
        to="/drinks"
        className="w-[105px] active:scale-90 transition-[0.3s] active:bg-slate-400 flex items-center justify-center gap-[5px] h-[50px] bg-red-500 rounded-[20px] text-white text-[16px]"
      >
        <BiSolidDrink className="text-white text-[21px]" /> Ichimliklar
      </Link>
      <Link
        to="/salat"
        className="w-[105px] active:scale-90 transition-[0.3s] active:bg-slate-400 flex items-center justify-center gap-[5px] h-[50px] bg-red-500 rounded-[20px] text-white text-[16px]"
      >
        <LuSalad className="text-white text-[21px]" /> Salatlar
      </Link>
      <Link
        to="/birinchitaom"
        className="w-[105px] active:scale-90 transition-[0.3s] active:bg-slate-400 flex items-center justify-center gap-[5px] h-[50px] bg-red-500 rounded-[20px] text-white text-[16px]"
      >
        <LuSoup className="text-white text-[20px]" /> 1-taomlar
      </Link>

      <Link
        to="/ikkinchitaom"
        className="w-[105px] active:scale-90 transition-[0.3s] active:bg-slate-400 flex items-center justify-center gap-[5px] h-[50px] bg-red-500 rounded-[20px] text-white text-[16px]"
      >
        <FaUtensils className="text-white text-[20px]" /> 2-taomlar
      </Link>
      <Link
        to="/mangal"
        className="w-[105px] active:scale-90 transition-[0.3s] active:bg-slate-400 flex items-center justify-center gap-[5px] h-[50px] bg-red-500 rounded-[20px] text-white text-[16px]"
      >
        <TbMeat className="text-white text-[22px] mb-[2px]" /> Mangal
      </Link>

      <Link
        to="/desert"
        className="w-[105px] active:scale-90 transition-[0.3s] active:bg-slate-400 flex items-center justify-center gap-[5px] h-[50px] bg-red-500 rounded-[20px] text-white text-[16px]"
      >
        <LuCakeSlice className="text-white text-[21px]" /> Desert
      </Link>
    </div>
  );
};

export default Navbar;
