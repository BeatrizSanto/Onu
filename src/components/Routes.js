import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "../Services/Header"
import Home from "../Page/Home"
import Sobre from "../Page/Sobre/Sobre"

export default function Rotas() {
 return(
  <Router>
     <Header/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Sobre' element={<Sobre/>} />
        
      </Routes>
    </Router>

 );
}