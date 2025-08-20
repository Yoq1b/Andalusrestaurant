import React from "react";
import { useNavigate } from "react-router-dom"; // 🔁 navigate uchun
import Logo from "../assets/andalus_logo.svg";
import "../css/animation.css";

const Home = () => {
  const navigate = useNavigate(); // 🔁 navigatsiya funksiyasi

  const handleMenuClick = () => {
    navigate("/menu"); // 🔁 menyu sahifasiga yo'naltiradi
  };

  return (
    <div className="bg-red-400 w-[712px] h-[1050px] m-auto flex flex-col items-center justify-center">
      <img src={Logo} alt="Logo" className=" w-[500px]" />
      <p className="text-[75px] text-white font-lora font-semibold">
        Oilaviy restorani
      </p>
      <button
        onClick={handleMenuClick}
        className="sway active:bg-slate-500 active:border-slate-500  w-[350px] h-[60px] border rounded-[40px] bg-white text-red-400 text-[20px] font-semibold mt-[100px] font-lora"
      >
        Menyu
      </button>
    </div>
  );
};

export default Home;
