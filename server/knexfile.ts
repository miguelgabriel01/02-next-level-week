import path from "path";//

module.exports = {
  client: 'sqlite3',//banco de dados usados
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')//busca pelo arquivo de conexão com o banco de dados
  },

  //responsavel pelo versionamneto do banco de dados
  migrations:{
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')//informa onde as migrações serão salvas
  },

  useNullAsDefault: true,//essa configuração é responsavel por fazer com que o banco adicione NULL aos valores não identificados
};

//DEUS É TOP