import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Apresentacao() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="container-404">
        <div className="section-column">
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>Parece que não conseguimos encontrar o que você está procurando.</p>
        </div>
      <button onClick={navigateToHome}>VOLTAR PARA A HOME</button>
    </div>
  );
}
