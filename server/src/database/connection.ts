//arquivo de conexão com o  banco de dados
import knex from 'knex';//importação do knex
import path from 'path';//O pathmódulo fornece utilitários para trabalhar com caminhos de arquivos e diretórios.

//salvamos em uma constante a função
const db = knex({
  client: 'sqlite3',//banco usado
  connection:{
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,//essa configuração é responsavel por fazer com que o banco adicione NULL aos valores não identificados

})

export default db;//exportação nescessario para que o arquivo possa ser usado em outros arquivo por meio de importação

//migrations: controle de versionamento do Banco de dados