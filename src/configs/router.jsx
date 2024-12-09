import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import PlanosBetao from "../pages/Planos";
import Apresentacao from "../pages/Apresentacao";

const AppRoutes = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Apresentacao/>} />
               <Route path="/home" element={<Home/>} />
               <Route path="/planos" element={<PlanosBetao />} />
           </Routes>
       </BrowserRouter>
   );
};

export default AppRoutes;
    