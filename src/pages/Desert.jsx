import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/animation.css";

const Milliy = () => {
  const [taomlar, setTaomlar] = useState([]);
  const navigate = useNavigate(); // 👈 Router hook

  useEffect(() => {
    fetch("/Desert.json")
      .then((res) => res.json())
      .then((data) => setTaomlar(data))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div className="w-full relative h-[1050px] bg-red-400 flex flex-col items-center">
      <button
        onClick={() => navigate("/menu")}
        className="absolute top-[50px] left-[20px]  px-4 py-2 bg-green-400 text-white font-bold rounded-full shadow hover:bg-red-100 transition"
      >
        ← Orqaga
      </button>
      <p className="text-[28px] text-white font-lora font-semibold">
        Desertlar
      </p>
      <div className="bg-red-400 w-[712px] h-[1011px] pt-[10px] pb-[40px] overflow-y-scroll flex flex-wrap justify-center gap-[15px] content-start">
        {taomlar.map((item) => (
          <div
            key={item.id}
            className="w-[330px] h-[270px] border rounded-[40px] mb-[15px] flex flex-col justify-between overflow-hidden bg-white"
          >
            <div className="w-full h-full rounded-tl-[40px] rounded-tr-[40px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center p-[5px]">
              <p className="text-black font-black font-lora text-[18px]">
                {item.title}
              </p>
              <p className="text-red-600 font-lora font-extrabold text-[18px]">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milliy;
