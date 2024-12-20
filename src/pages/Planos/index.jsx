import React, { useEffect } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import "./style.css";

export default function PlanosBetao() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/'); 
  };

  return (
    <div className="container">
      <div className="header-planos"> 
          <IoArrowBackSharp
            color="#fff"
            size={20}
            style={{ position: "absolute", left: "12px", cursor: "pointer" }}
            onClick={navigateToHome}
          />
        <h3>Planos disponíveis</h3>
      </div>
      {/* <div className="background-img" /> */}
      <div className="info-text">
        <p>
          - Entrevista individual online com especialista de negócio do time da
          NWB <br /> - Diagnóstico 360º da sua empresa <br /> - Plano de ação prático com foco
          nos resultados <br /> - Oportunidade exclusiva de acesso a metodologia que
          possibilitou mais de R$1.3BILHÃO em faturamento para as empresas
          parceiras no último ano.
        </p>
      </div>
      <div className="form-planos">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" /> 
        <input type="text" placeholder="CPF" /> 
        <input type="text" placeholder="DDD + WhatsApp" /> 
        <button type="submit">CADASTRAR</button>
      </div>
    </div>
  );
}
