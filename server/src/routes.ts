import express, { response } from 'express';//importação do modulo express

const routes = express.Router();//modulo de roteamento do express

//rota responsavel pelo cadastro de uma aula
routes.post('/classes', ( request, response ) => {
  const [
    name,//nome
    avatar,//avat(foto)
    whatsapp,//numero do wpp
    bio,//pequena descrição
    subject,//materias que dá aula
    cost,//valor da hora/aula
    schedule//horarios e dias de atendimento
  ] = request.body;//const que armazena os dados recebidos

  console.log(data)

  return response.send();
})
 
 
export default routes;//exportamos o arquivo de configuração de rotas

//DEUS É TOP