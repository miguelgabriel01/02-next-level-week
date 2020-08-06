import React from 'react';//importação do react

//Estilização
import './styles.css';//importação do css do componentes

//importação das imagens e icones
import BolsonaroPresidente2022 from '../../assets/images/Bolsonaro.jpg';//importação da img do professor
import wppIcon from '../../assets/images/icons/whatsapp.svg';//importação do icone do wpp

export default function TeacherItem(){
  return(
    <article className="teacher-item">
    <header>
      <img src={BolsonaroPresidente2022} alt="Presidente do Brasil"/>
      <div>
        <strong>Jair Messias ( O Bolsonaro )</strong>
        <span>E tem que se f...</span>
      </div>
    </header>
    <p>
      Presidente do Brasil
      <br/><br/>
      É só n matar, n roubar, que tu n vai pra lá porra. <br/>acabô
    </p>

    <footer>
      <p>
        Preço/Hora
        <strong>R$500.00</strong>
      </p>
      <button type="button">
        <img src={wppIcon} alt="WhastApp"/>
        entrar em contato
      </button>
    </footer>
  </article>

  );
}