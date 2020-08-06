import React from 'react';//importação do react

import { BrowserRouter, Route} from 'react-router-dom';//a dependencia responsave por as rotas 

//importação dos componentes
import Landing from './pages/Landing';//importação do componente da pagina inicial
import TeactherList from './pages/TeactherList';//importação do componente da pagina de listagem 
import TeactherForm from './pages/TeactherForm';//importação do componente de formulario de cadastro

export default function Routes(){
  return(
    <BrowserRouter>
     <Route path="/"  exact component={Landing} />
     <Route  path="/study" component={TeactherList} />
     <Route path="/give-classes" component={TeactherForm} />
    </BrowserRouter>
  );
}

//exact: responsavel para que o react n mostre todas as paginas que iniciem com a /
