import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import "./style.css";

export default function Apresentacao() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };
  return (
    <div className="container-apresentacao">
      <div className="header-perfil">
        <div className="section-img">
          <img
            src="https://media-for2-1.cdn.whatsapp.net/v/t61.24694-24/361360914_279215728132783_6241601325352706502_n.jpg?stp=dst-jpg_tt6&ccb=11-4&oh=01_Q5AaIDLM6Xi5Sq8xC239AhbDfxICAFIs6ln1CVAaN089AZTg&oe=6763FCDA&_nc_sid=5e03e0&_nc_cat=105"
            alt="foto-perfil"
          />
        </div>
          <h3>Beto Reis</h3>
      </div>
      <button onClick={navigateToHome}>ACESSAR PLANOS</button>
    </div>
  );
}
