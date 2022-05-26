import { Button } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import HeaderComponent from './Components/HeaderComponent';

import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from '../src/Pages/Home'
import About from "../src/Pages/About";
import Products from "../src/Pages/Products";
import Contact from "../src/Pages/Contact";
import Register from "../src/Pages/Register";
import Product from "./Pages/Product";
import NotFound from "../src/Pages/NotFound";
import Testing from "./Components/Testing";





function App() {
  
  return (
    <div className="App">
      
    <HeaderComponent/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Products/:id" element={<Product/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    {/* <Testing/> */}
    </div>
  );
}

export default App;
