import express, { response } from 'express';//importação do modulo express
import ClassesController from './controllers/ClassesController';//controle de cadastros de aulas e blá,blá,blá..

const routes = express.Router();//modulo de roteamento do express
const classesController = new ClassesController();//importamos o controle de cadastro de aulas

//rotas
routes.post('/classes', classesController.create);//rota responsavel pelo cadastro de uma aula
routes.get('/classes', classesController.index);//rota responsavel por listar as aulas cadastradas
  
export default routes;//exportamos o arquivo de configuração de rotas

//DEUS É TOP