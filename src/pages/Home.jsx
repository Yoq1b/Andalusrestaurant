import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/andalus_logo2.jpg";
import "../css/animation.css";

const Home = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu");
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div
        className="
          w-full
          max-w-[712px]
          flex
          flex-col
          items-center
          justify-center
          px-4
        "
      >
        {/* 🖼 Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="w-[clamp(200px,60vw,500px)] mb-4"
        />

        {/* 🏷 Title */}
        <p className="text-[rgb(255,215,0)] font-lora font-semibold text-center text-[clamp(28px,8vw,75px)]">
          Andalus restorani
        </p>
        <p className="text-[rgb(255,215,0)] font-lora font-semibold text-center text-[clamp(20px,8vw,70px)]">
          Sifat va tam uyg'unligi
        </p>

        {/* 🔘 Button */}
        <button
          onClick={handleMenuClick}
          className="
            sway
            active:bg-slate-500
            active:border-slate-500
            w-[clamp(220px,60vw,350px)]
            h-[clamp(48px,8vw,60px)]
            border
            rounded-[40px]
            bg-white
            text-black
            text-[clamp(16px,4vw,20px)]
            font-semibold
            mt-[clamp(40px,12vw,100px)]
            font-lora
          "
        >
          Menyu
        </button>
      </div>
    </div>
  );
};

export default Home;
