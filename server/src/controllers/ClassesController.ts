import { Request, Response } from "express";//esta importação permite que o req,res seja identificado e usudo

import db from '../database/connection';//importa o arquivo de conexão com o banco
import convertHourToMinutes from '../utils/convertHoursToMinutes';//função que fAZ A CONVERSÃO DE minutos em horas

//define o tipo do objeto recebido
interface ScheduleItem{
  week_day: number;//dia da semana no formato de numero
  from: string;//inicio das aulas em formato texto
  to:string;//fim das aulas em formato texto
}


export default class ClassController {
  async create( request: Request, response:Response ){
    const {
      name,//nome
      avatar,//avat(foto)
      whatsapp,//numero do wpp
      bio,//pequena descrição
      subject,//materias que dá aula
      cost,//valor da hora/aula
      schedule//horarios e dias de atendimento
     } = request.body;//const que armazena os dados recebidos
  
    const trx = await db.transaction();//caso um dos cadastros dê errado, n salva, apaga todo o conteudo.(salvei meu dados de usuario, mas quando fui cadastrar as aulas deu merda.. ai n salva nada)
  
    try{
  
  
    //recebenos os dados e inserimos na tabela informada
    //salva os dados do usuario
   const insertedUsersIds = await trx('users').insert({//tabela de usuarios
    name,//nome
    avatar,//avatar(foto)
    whatsapp,//numero do wpp
    bio//pequena descrição
  });
  
  
  
  const user_id = insertedUsersIds[0];//const que armazena o id do usuario
  
  
  //recebemos os dados das aulas com o id do usuario que cadastrou
  //salva os dados das aulas 
  const insertedClassesId = await trx('classes').insert({
    subject,//aulas possiveis
    cost,//valor hora/aula
    user_id,//id que recebemos da const
  });
  
  const class_id = insertedClassesId[0];//constante que armazena o id da aula
  
  const classSchedule = schedule.map(( scheduleItem: ScheduleItem ) => {//const que mapeia toda coluna da tabela de horaios
    return {
      class_id,//id da class
       week_day:  scheduleItem.week_day,//dia da semana( 1,2,3,4,5,6,7)
       from: convertHoursToMinutes(scheduleItem.from),//horario já convertido que o professor começa a dar aula
       to: convertHourToMinutes(scheduleItem.to),//horario que ele encerra as aulas
    };
  });
  
  //agora salvamos no banco os dados sobre horario do professor
  await trx('class_schedule').insert(classSchedule);
   
  await trx.commit()//neste ponto ele realmente salva os dados
  
   return response.status(201).send();
    }catch(err){
      await trx.rollback();//desfaz toda alteração feita no banco no meio tempo em que o usuario faz o cadastro da mulesta do satanas
      
      console.log("a merda do erro é:" + err);
  
      return response.status(400).json({
        error: "Unexpected error while creating new classe( Tu ru ru.. )"
      })
    }
  
  }
}