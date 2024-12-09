import React, { useEffect } from "react";
import "./style.css";
import { MdVerified } from "react-icons/md";
import { useNavigate } from 'react-router-dom';  // Importe o useNavigate



export default function Home() {
  const navigate = useNavigate();

  const navigateToPlanos = () => {
    navigate('/planos'); 
  };
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
        <MdVerified color="#fff" size={'20'}/>

      </div>

      <div className="card-cursos" onClick={navigateToPlanos}>
        <div className="section-preco">
          <p>METODOLOGIA TECH</p>
          <p className="text-preco">R$ 397,00</p> 
        </div>
          <p>TRANSFORME SUA ENTREVIA EM CONTRATO</p>
          <small>ASSISTA AGORA</small>
      </div>
      <div className="card-cursos">
      <div className="section-preco">
          <p>NEGOCIAÇÃO COM DIFERENTES PERFIS</p>
          <p className="text-preco">R$ 397,00</p> 
        </div>
          <p>SE RELACIONAR É PARA POUCOS, MAS OS RESULTADOS SÃO GIGANTES</p>
          <small>ASSISTA AGORA</small>
      </div>

      <div className="card-cursos">
      <div className="section-preco">
          <p>MENTORIA ON-LINE COLETIVA</p>
          <p className="text-preco">R$ 597,00</p> 
        </div>
          <ul>
            <li>GRUPO DE ATÉ 5 PESSOAS</li>
            <li>1 MÊS</li>
            <li>400 MIN DE MENTORIA</li>
          </ul>
          <small>GARANTIR MINHA VAGA</small>
      </div>
      <div className="card-cursos">
      <div className="section-preco">
          <p>MENTORIA PERSONALIZADA</p>
          <p className="text-preco">R$ 1.500,00</p> 
        </div>
          <ul>
            <li>SESSÕES ESTRATÉGICAS</li>
            <li>3 MESES</li>
            <li>1H 30MIN POR MÊS</li>
          </ul>
          <small>CONTRATE AGORA</small>
      </div>
      <div className="card-cursos">
      <div className="section-preco">
          <p>TRANSFORME SEU CURRÍCULO</p>
          <p className="text-preco">R$ 60,00</p> 
        </div>
          <p>ANÁLISE E COMENTÁRIOS DO LINKEDIN DO CV</p>
          <small>CONTRATE AGORA</small>
      </div>
      <div className="card-cursos">
          <p>CONTRATE UMA PALESTRA COM BETO REIS</p>
          <small>ENTRE EM CONTATO</small>
      </div>
      <div className="card-cursos">
      <div className="section-preco">
          <p>EBOOK</p>
          <p className="text-preco">R$ 40,00</p> 
        </div>
          <p>O ACESSO SÃO PARA TODOS, MAS OS FRUTOS SÃO GIGANTES</p>
          <small>COMPRE AGORA</small>
      </div>
    </div>
  );
}
