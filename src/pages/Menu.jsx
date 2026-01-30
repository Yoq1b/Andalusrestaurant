import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Milliy from "../assets/milliy.png";
import Fast from "../assets/fast.jpg";
import Mangal from "../assets/mangal.jpg";
import Desert from "../assets/desert.png";
import Drink from "../assets/drink.jpg";
import Salat from "../assets/salat.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black/50 min-h-screen flex flex-col">
      {/* 🔙 Back */}
      <button
        onClick={() => navigate("/")}
        className="
          fixed
          top-[20px]
          left-[16px]
          z-50
          px-3
          py-2
          bg-green-400
          text-white
          font-bold
          rounded-full
        "
      >
        ← Orqaga
      </button>

      {/* 🧱 CONTENT — NAVBAR HISOBGA OLINDI */}
      <div
        className="
          flex-1
          pt-[70px]
          px-3
          pb-[calc(70px+env(safe-area-inset-bottom))]
          grid
          grid-rows-[repeat(6,minmax(90px,1fr))]
          gap-[8px]
        "
      >
        <MenuCard to="/birinchitaom" bg={Milliy} title="1-taomlar (suyuq)" />
        <MenuCard to="/ikkinchitaom" bg={Fast} title="2-taomlar" />
        <MenuCard to="/mangal" bg={Mangal} title="Mangal" />
        <MenuCard to="/salat" bg={Salat} title="Salatlar" />
        <MenuCard to="/desert" bg={Desert} title="Desert" />
        <MenuCard to="/drinks" bg={Drink} title="Ichimliklar" />
      </div>
    </div>
  );
};

const MenuCard = ({ to, bg, title }) => {
  return (
    <Link
      to={to}
      className="
        w-full
        h-full
        rounded-[22px]
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        border"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="px-3 py-2 bg-black/50 rounded-[14px]">
        <p className="text-white font-lora font-semibold text-[clamp(14px,3.5vw,22px)] text-center">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default Home;
