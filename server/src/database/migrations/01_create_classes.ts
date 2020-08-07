//tabelas de aulas/materias do professor
import Knex from 'knex';//importamos o knex

export async function up(knex: Knex){
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();//a chave primaria vai ser o id do usuario
    table.string('subject').notNullable();//materia que o professor da aula, que n pode ser nula
    table.decimal('cost').notNullable();//valor da hora/aula, que não pode ser nula

    //relacionamento com o usuario
    table.integer('user_id')//a chave istrangeira será o id do usuario
            .notNullable()//não pode ser nulo
            .references('id')//a referencia vai ser o id do usuario(professor)
            .inTable('users')//na tabela de usuarios
            .onUpdate('CASCADE')//se o id do usuario é alterado, todos os registros de aulas tambem são
            .onDelete('CASCADE');//caso um usuario/professor, seja apagado do registro, todas as aulas dele são apagadas
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('classes');//caso a tabela ongs já exista, ela é apagada e no lufar vai ficar a nova tabela atualizada
};


//DEUS É TOP  