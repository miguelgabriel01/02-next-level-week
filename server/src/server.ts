import express from 'express';//importação do express

const app = express();//salva em uma constante a função express

app.use(express.json());//por padrão, o Express não entendi JSON. por isso, esta configuração deve ser feita 

//--------------------------------------------------------------------------------------------
//Metodos HTTP:

//GET: Buscar ou listar um informação
//POST: Criar uma nova informação
//PUT: Atualizar uma informação já existente
//DELETE: Deletar uma informação

//Corpo ( Requeste Body ): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou apagar
//Query Params: Paginação, filtros,ordenação

//OBS: O navegador, por padrão, sempre acessa uma rota pelo metodo GET

//--------------------------------------------------------------------------------------------

app.get('/users', ( req, res ) => {
 return res.json({ Mesage: "Olá mundo"});
})

//este metodo faz com que nossa aplicação "escute" um endreço HTTP( Ouvir requisições HTTP )
const PORT = 3333;//porta que a aplicação ira rodar
app.listen(PORT,() => {

  console.log(" ")
  console.log("--------------------------------")
  console.log("Servidor iniciado na porta 3333");
  console.log("Para derrubar servidor: CTRL + C");
  console.log("github.com/miguelgabriel01")
  console.log("mgbs@discente.ifpe.edu.br")
  console.log("  ")

  console.log("--------------------------------")

  console.log(" ")
  console.log("CRISTO VEM!!!!!!!!!")
})
