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
  
  //rota responsavel por listar as aulas cadastradas
  async index(request:Request, response:Response){
    const filters = request.query;//constante que vai armazenar os paramentros que neste caso são o dia da semana, horario e materia
    
    //CONST QUE TIPAM OS DADOS RECEBIDO 
    const subject = filters.subject as string;//informa que a const de materias é do tipo texto
    const week_day = filters.week_day as string;//a const de dia da semana é tipo numero
    const time = filters.time as string;//a do horario é tipo texto

    if(!filters.week_day || !filters.subject || !filters.time){
      return response.status(400).json({
        error: "Missing filters to search classes"
      });
    }

    const timeImMinutes = convertHourToMinutes(time);//const que armazena a função que converte horas em minutos

   console.log(timeImMinutes);//retorna no terminal o horario onvertido em minutos

   const classes = await db('classes')
             //verificamos agora se o horario que o usuario escolheu, tem algum professor disponivel
             .whereExists(function(){
               this.select('class_schedule.*')
               .from('class_schedule')
               .whereRaw('`class_schedule` . `class_id` = `classes` . `id`')
               .whereRaw('`class_schedule` . `week_day` = ??', [Number(week_day)])
               .whereRaw('`class_schedule` .`from` <= ??' , [timeImMinutes])
               .whereRaw('`class_schedule` .`to` > ??' , [timeImMinutes])
               
             })
    
            .where('classes.subject', '=', subject)//pŕocura no banco pelas materias informadas
            .join('users' , 'classes.user_id' , '=' , 'users.id')
            .select( ['classes.*', 'users.*'] );//todas as informações sobre a aula e usuario(professor que vai dar esta merda de aula)

   return response.json(classes);//lista os dados da materia(se tiver no banco de dados)


  }



  //rota responsavel por cadastrar o usuario, aulas e horarios
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
       from: convertHourToMinutes(scheduleItem.from),//horario já convertido que o professor começa a dar aula
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

//DEUS É TOP