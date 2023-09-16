import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Product from "./Components/Product";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Product />} />
    </Routes>
  )
}
export default App;
