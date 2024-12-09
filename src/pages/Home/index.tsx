import React, { useEffect } from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <div className="header-img">
        <div className="section-img">
          <img src="" alt="" />
        </div>
        <div className="section-name">
          <h3>Beto Reis</h3>
          <span>@_obetoreis</span>
        </div>
      </div>

      <div className="card-cursos">
        <img
          src="https://nwbcompany.com.br/wp-content/webp-express/webp-images/uploads/2024/09/LINK-BIO-NWB-OPEN-HOUSE.png.webp"
          alt=""
        />
      </div>
      <div className="card-cursos">
        <img
          src="https://nwbcompany.com.br/wp-content/uploads/2024/07/1-Banner-Sessao-EstrategicaResultado.webp"
          alt=""
        />
      </div>
      <div className="card-cursos">
        <img
          src="https://nwbcompany.com.br/wp-content/webp-express/webp-images/uploads/2024/09/LINK-BIO-EMPRESA-LUCRATIVA.png.webp"
          alt=""
        />
      </div>
      <div className="card-cursos">
        <img
          src="https://nwbcompany.com.br/wp-content/uploads/2024/07/4-Banner-Youtube-2Resultado.webp"
          alt=""
        />
      </div>
    </div>
  );
}
