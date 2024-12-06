import React, { useEffect } from "react";
import "./style.css";
import { MdVerified } from "react-icons/md";


export default function Home() {
  return (
    <div className="home">
      <div className="header-perfil">
      <div className="section-img">
          <img
            src="https://media-for2-1.cdn.whatsapp.net/v/t61.24694-24/361360914_279215728132783_6241601325352706502_n.jpg?stp=dst-jpg_tt6&ccb=11-4&oh=01_Q5AaIDLM6Xi5Sq8xC239AhbDfxICAFIs6ln1CVAaN089AZTg&oe=6763FCDA&_nc_sid=5e03e0&_nc_cat=105"
            alt="foto-perfil"
          />
        </div>
        <div className="section-column">
        <h3>Beto Reis</h3>
        <span>@_obetoreis</span>
        </div>
        <MdVerified color="blue" size={'20'}/>

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
