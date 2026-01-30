import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/animation.css";

/* 🔄 Rasm loader component */
const ImageWithLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const Milliy = () => {
  const [taomlar, setTaomlar] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Birinchitaom.json")
      .then((res) => res.json())
      .then((data) => setTaomlar(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div className="w-full relative min-h-screen bg-black flex flex-col items-center">
      {/* 🔙 Fixed back button — barcha sahifalar bilan bir xil */}
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

      {/* 🏷 Title — umumiy typography */}
      <p className="text-white font-lora py-[10px] font-semibold text-xl sm:text-2xl lg:text-3xl">
        Suyuq taomlar
      </p>

      {/* 📌 Content — Milliy layout’iga mos */}
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
              {/* 🟢 Loader qo‘shildi */}
              <ImageWithLoader src={item.image} alt={item.title} />
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
