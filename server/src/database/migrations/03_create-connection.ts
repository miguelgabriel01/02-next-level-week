//tabela de conexão com os professores
import Knex from 'knex';//importamos o knex

export async function up(knex: Knex){
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();//a chave primaria vai ser o id do usuario

    //relacionamento com o usuario
    table.integer('user_id')//a chave istrangeira será o id do usuario
            .notNullable()//não pode ser nulo
            .references('id')//a referencia vai ser o id da classe
            .inTable('users')//na tabela de usuarios
            .onUpdate('CASCADE')//se o id do usuario é alterado, todos os registros de aulas tambem são
            .onDelete('CASCADE');//caso um usuario/professor, seja apagado do registro, todas as aulas dele são apagadas

            table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))//pega a hora em que a conexão foi feita
            .notNullable();//essa informação não pode ser nula
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('connections');//caso a tabela ongs já exista, ela é apagada e no lufar vai ficar a nova tabela atualizada
};


//DEUS É TOP  