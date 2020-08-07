import express, { response } from 'express';//importação do modulo express

import ClassesController from './controllers/ClassesController';//controle de cadastros de aulas e blá,blá,blá..
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();//modulo de roteamento do express
const classesController = new ClassesController();//importamos o controle de cadastro de aulas
const connectionsController = new ConnectionController();//importamos o arquivo com o controle de conexões feitas e criação de novas

//rotas
routes.post('/classes', classesController.create);//rota responsavel pelo cadastro de uma aula
routes.get('/classes', classesController.index);//rota responsavel por listar as aulas cadastradas

routes.post('/connections', connectionsController.create);//rota responsavel por  criar novas conexões
routes.get('/connections', connectionsController.index);//rota responsavel por listaras conexões realizadas entre alunos e professores

export default routes;//exportamos o arquivo de configuração de rotas

//DEUS É TOP