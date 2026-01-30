import React from "react";
import { Link } from "react-router-dom";
import { BiSolidDrink } from "react-icons/bi";
import { LuCakeSlice, LuSoup, LuSalad } from "react-icons/lu";
import { FaUtensils } from "react-icons/fa6";
import { TbMeat } from "react-icons/tb";

const Navbar = () => {
  return (
    <div
      className="
        w-full
       py-2 min-h-[46px]
        bg-slate-300
        fixed
        bottom-0
        z-50
        flex
        items-center
        justify-between
        px-2
      "
    >
      <NavItem to="/drinks" label="Ichimliklar" icon={<BiSolidDrink />} />
      <NavItem to="/salat" label="Salatlar" icon={<LuSalad />} />
      <NavItem to="/birinchitaom" label="1-taomlar" icon={<LuSoup />} />
      <NavItem to="/ikkinchitaom" label="2-taomlar" icon={<FaUtensils />} />
      <NavItem to="/mangal" label="Mangal" icon={<TbMeat />} />
      <NavItem to="/desert" label="Desert" icon={<LuCakeSlice />} />
    </div>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <Link
      to={to}
      className="
        flex-1
        h-[50px]
        mx-[2px]
        flex
        items-center
        justify-center
        gap-[6px]
        bg-red-500
        rounded-[18px]
        text-white
        active:scale-95
        transition
        text-[clamp(12px,1.5vw,16px)]
      "
    >
      {/* 🔹 width < 450px bo‘lsa ikon KATTA */}
      <span
        className="
          text-[1.6em]
          [@media(max-width:449px)]:text-[1.8em]
        "
      >
        {icon}
      </span>

      {/* 🔹 width ≥ 450px bo‘lsa text chiqadi */}
      <span className="hidden [@media(min-width:450px)]:inline">{label}</span>
    </Link>
  );
};

export default Navbar;
