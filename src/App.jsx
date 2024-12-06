import React from "react";
import { Route, Routes } from "react-router-dom";
import './index.css';
import Home from "./pages/home" 
import DetailedStats from "./pages/DetailedStats";
import Contact from "./pages/Contact";
import Footer from "./layouts/footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detailed-stats" element={<DetailedStats />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
