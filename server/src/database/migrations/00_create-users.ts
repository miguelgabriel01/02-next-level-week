import Knex from 'knex';//importamos o knex

export async function up(knex: Knex){
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();//a chave primaria vai ser o id do usuario
    table.string('name').notNullable();//nome do usuario, que não pode ser nulo
    table.string('avatar').notNullable();//foto ou avatar do usuario, que não pode ser nulo
    table.string('whatsapp').notNullable();//wpp do usuario, que não pode ser nulo
    table.string('bio').notNullable();//descrição do usuario, que não pode ser nulo
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('users');//caso a tabela ongs já exista, ela é apagada e no lufar vai ficar a nova tabela atualizada
};


//DEUS É TOP  