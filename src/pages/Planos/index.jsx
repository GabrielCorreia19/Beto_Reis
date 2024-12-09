import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function PlanosBetao() {
  return (
    <div className="container">
      <div className="header-planos">
        <h2>Planos disponíveis</h2>
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
    </div>
  );
}
