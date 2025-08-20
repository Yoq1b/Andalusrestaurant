import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Milliy from "../assets/milliy.png";
import Fast from "../assets/fast.jpg";
import Mangal from "../assets/mangal.jpg";
import Desert from "../assets/desert.png";
import Drink from "../assets/drink.jpg";
import Salat from "../assets/salat.jpg";
import "../css/animation.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const [taomlar, setTaomlar] = useState([]);
  const navigate = useNavigate(); // 👈 Router hook

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTaomlar(data))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div className="bg-red-400 w-[712px] h-[1020px] m-auto gap-[15px] pb-[15px] flex flex-col items-center justify-center">
      {/* Milliy Taomlar */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-[50px] left-[20px]  px-4 py-2 bg-green-400 text-white font-bold rounded-full shadow hover:bg-red-100 transition"
      >
        ← Orqaga
      </button>
      <Link
        to="/birinchitaom"
        className="w-[97%] h-[230px] border rounded-[40px] gap-[20px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Milliy})` }}
      >
        <div className="w-[55%] h-[80px] flex items-center justify-center bg-slate-400 bg-opacity-60 rounded-[20px]">
          <p className="text-[28px] text-white font-lora font-semibold">
            1-taomlar (suyuq)
          </p>
        </div>
      </Link>

      {/* Fast Food */}
      <Link
        to="/ikkinchitaomlar"
        className="w-[97%] h-[230px] border rounded-[40px] gap-[20px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Fast})` }}
      >
        <div className="w-[55%] h-[80px] flex items-center justify-center bg-slate-400 bg-opacity-60 rounded-[20px]">
          <p className="text-[28px] text-white font-lora font-semibold">
            2-taomlar
          </p>
        </div>
      </Link>
      <Link
        to="/mangal"
        className="w-[97%] h-[230px] border rounded-[40px] gap-[20px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Mangal})` }}
      >
        <div className="w-[55%] h-[80px] flex items-center justify-center bg-slate-400 bg-opacity-60 rounded-[20px]">
          <p className="text-[28px] text-white font-lora font-semibold">
            Mangal
          </p>
        </div>
      </Link>
      {/* Desert */}
      <Link
        to="/salat"
        className="w-[97%] h-[230px] border rounded-[40px] gap-[20px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Salat})` }}
      >
        <div className="w-[55%] h-[80px] flex items-center justify-center bg-slate-400 bg-opacity-60 rounded-[20px]">
          <p className="text-[28px] text-white font-lora font-semibold">
            Salatlar
          </p>
        </div>
      </Link>
      <Link
        to="/desert"
        className="w-[97%] h-[230px] border rounded-[40px] gap-[20px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Desert})` }}
      >
        <div className="w-[55%] h-[80px] flex items-center justify-center bg-slate-400 bg-opacity-60 rounded-[20px]">
          <p className="text-[28px] text-white font-lora font-semibold">
            Desert
          </p>
        </div>
      </Link>

      {/* Ichimliklar */}
      <Link
        to="/drinks"
        className="w-[97%] h-[230px] border rounded-[40px] gap-[20px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Drink})` }}
      >
        <div className="w-[55%] h-[80px] flex items-center justify-center bg-slate-400 bg-opacity-60 rounded-[20px]">
          <p className="text-[28px] text-white font-lora font-semibold">
            Ichimliklar
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
