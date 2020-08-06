import React from 'react';//importação do react

//importação de componentes
import PageHeader from '../../components/PageHeader';//importação do componente que será ultilizado por diversasw paginas( o menu )
import TeacherItem from '../../components/TeacherItem';//importção do componemte que lista os professores e seus dados

//importação do arquivo de estilização da pagina
import './styles.css';

export default function TeactherList(){
  return(
    <div id="page-teacher-list" className="container">
    <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
            <div className="input-block">
                <label htmlFor="subject">Matéria</label>
                <input type="text" id="subject" />
            </div>

            <div className="input-block">
                <label htmlFor="week_day">Dia da semana</label>
                <input type="text" id="week_day" />
            </div>

            <div className="input-block">
                <label htmlFor="time">Hora</label>
                <input type="text" id="time" />
            </div>
        </form>
    </PageHeader>

    <main>
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </main>

 
</div>
)
}
