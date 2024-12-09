import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import PlanosBetao from "../pages/Planos";
import Apresentacao from "../pages/Apresentacao";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/planos" element={<PlanosBetao />} />
               <Route path="/*" element={<NotFound />} />
           </Routes>
       </BrowserRouter>
   );
};

export default AppRoutes;
    