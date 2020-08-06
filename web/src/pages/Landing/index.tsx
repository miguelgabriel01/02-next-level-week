import React from 'react';//importação do react para este arquivo
import { Link } from 'react-router-dom';//possibilita ir para outras paginas sem recarregar toda a pagina atual 

//importação de imgs para o componente
import logoImg from '../../assets/images/logo.svg';//img de fundo
import landingImg from '../../assets/images/landing.svg';//

import studyIcon from '../../assets/images/icons/study.svg';//
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';//
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';//

//importação de estilos do componente
import './styles.css';//arquivo css

export default function Landing() {
  return(
      <div id="page-landing">
          <div id="page-landing-content" className="container">
              <div className="logo-container">
                  <img src={logoImg} alt="Proffy"/>
                  <h2>Sua plataforma de estudo online.</h2>
              </div>

              <img 
                  src={landingImg} 
                  alt="Plataform de estudos" 
                  className="hero-image"
              />

              <div className="buttons-container">
                  <Link to="/study" className="study">
                      <img src={studyIcon} alt="Estudar"/>
                      Estudar
                  </Link>

                  <Link to="give-classes" className="give-classes">
                      <img src={giveClassesIcon} alt="Dar aulas"/>
                      Dar aulas
                  </Link>
              </div>

              <span className="total-connections">
                  Total de 200 conexões já realizadas
                  <img src={purpleHeartIcon} alt="Coração roxo"/>
              </span>
          </div>
      </div>
  )
}

