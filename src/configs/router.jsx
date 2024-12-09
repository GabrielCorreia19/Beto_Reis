import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import PlanosBetao from "../pages/Planos";

const AppRoutes = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/planos" element={<PlanosBetao />} />
           </Routes>
       </BrowserRouter>
   );
};

export default AppRoutes;
    