import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "../Paginas/Home";
import Sabores from "../Paginas/Sabores";
import Sobre from "../Paginas/Sobre";
=======
import Home from "../paginas/Home";
import Sabores from "../paginas/Sabores";
import Sobre from "../paginas/Sobre";
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Sabores" element={<Sabores />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
