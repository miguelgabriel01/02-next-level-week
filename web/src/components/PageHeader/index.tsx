import React from 'react';//importação do react

import { Link } from 'react-router-dom';//resposanvel pelos links entre as paginas

//importação de icones para o componente
import logoImg from '../../assets/images/logo.svg';//icone de logo da aplicação
import backImg from '../../assets/images/icons/back.svg';//icone para voltar a pagiina inicial

//importação do arquivo de estilização da pagina
import './styles.css';

//nesta parte do codigo, informamos o tipo de valor que a propiedade pertence, e se ele é obrigatorio ou não
interface PageHeaderProps {
  title: string;
}

//React.FC  = componentes escritos em formato de função

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
  return (
      <header className="page-header">
          <div className="top-bar-container">
              <Link to="/">
                  <img src={backImg} alt="Voltar"/>
              </Link>
              <img src={logoImg} alt="Proffy"/>
          </div>

          <div className="header-content">
              <strong>{props.title}</strong>
              
              
              {props.children}
          </div>
      </header>
  );
}

export default PageHeader;//exportação do componente