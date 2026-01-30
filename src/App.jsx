import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Birinchitaom from "./pages/Birinchitaom";
import Ikkinchitaom from "./pages/Ikkinchitaom";
import Desert from "./pages/Desert";
import Drinks from "./pages/Drinks";
import Salat from "./pages/Salat";
import Mangal from "./pages/Mangal";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative  m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/birinchitaom" element={<Birinchitaom />} />
          <Route path="/ikkinchitaom" element={<Ikkinchitaom />} />
          <Route path="/desert" element={<Desert />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/salat" element={<Salat />} />
          <Route path="/mangal" element={<Mangal />} />
        </Routes>
        <Navbar />
      </div>
    </BrowserRouter>
  );
};

export default App;
