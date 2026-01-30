import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/animation.css";

const Milliy = () => {
  const [taomlar, setTaomlar] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Ikkinchitaom.json")
      .then((res) => res.json())
      .then((data) => setTaomlar(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div className="w-full relative min-h-screen bg-black flex flex-col items-center">
      {/* 🔙 Fixed back button */}
      <button
        onClick={() => navigate("/menu")}
        className="
          fixed
          top-[30px]
          left-[20px]
          z-50
          px-4
          py-2
          bg-green-400
          text-white
          font-bold
          rounded-full
          shadow
          hover:bg-red-100
          transition
        "
      >
        ← Orqaga
      </button>

      {/* 🏷 Title */}
      <p className="text-white font-lora py-[10px] font-semibold text-xl sm:text-2xl lg:text-3xl">
        2-taomlar
      </p>

      {/* 📌 Content — umumiy layout */}
      <div
        className="
          bg-black
          w-full
          max-w-[712px]
          flex-1
          pt-[10px]
          pb-[calc(4rem+env(safe-area-inset-bottom))]
          overflow-y-auto
          flex
          flex-wrap
          justify-center
          gap-[10px]
          content-start
        "
      >
        {taomlar.map((item) => (
          <div
            key={item.id}
            className="
              w-[47%]
              aspect-[5/4.5]
              border
              rounded-[20px]
              mb-[15px]
              flex
              flex-col
              justify-between
              overflow-hidden
              bg-white
            "
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center aspect-[6/1]">
              <p className="text-black font-black font-lora text-sm sm:text-base lg:text-lg">
                {item.title}
              </p>
              <p className="text-red-600 font-lora font-extrabold text-sm sm:text-base lg:text-lg">
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
