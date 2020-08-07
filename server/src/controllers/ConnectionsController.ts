import { Request, Response } from "express";//esta importação permite que o req,res seja identificado e usudo
import db from  '../database/connection';//importação do arquivo de configuração do banco de dados

export default class ConnectionController{

  //rota responsavel por listar todas as conexões feitas entre alunos e professores
  async index(request:Request, response:Response){

    const totalConnections = await db('connections').count('* as total');//basicamente esta const vai armazenar os dados de todas as conexões do banco de dados da mulesta do satanas
    
    const { total } = totalConnections[0];//const que faz uma deszestruturação*** onde por ser um unico dado, tenho que colocar o indice em um array

    return response.json({ total })//e aqui envio um json com o total das conexões feitas
  }

  //rota responsavel por criar as conexões entre os alunos e professores
  async create(request:Request, response:Response){
     
    const { user_id } = request.body;//const que armazena o id do usuario recebido

    //salva na tabela connections o id do usuario
    await db('connections').insert({
      user_id,//insere o id do usuario
    });

    return response.status(201).send();//chegou nesta parte.. é só dois toques na bola
  }

}

//DEUS É TOP