//tabela de horarios do professor
import Knex from 'knex';//importamos o knex

export async function up(knex: Knex){
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();//a chave primaria vai ser o id do usuario

    table.integer('week_day').notNullable();//dia da semana, que não pode ser nulo
    table.integer('from').notNullable();//horario de inicio das aulas do professor, que não pode ser nulo
    table.integer('to').notNullable();//horario do fim das aulas do professor, que não pode ser nulo

    //relacionamento com o usuario
    table.integer('class_id')//a chave istrangeira será o id da classe
            .notNullable()//não pode ser nulo
            .references('id')//a referencia vai ser o id da classe
            .inTable('classes')//na tabela de classes
            .onUpdate('CASCADE')//se o id do usuario é alterado, todos os registros de aulas tambem são
            .onDelete('CASCADE');//caso um usuario/professor, seja apagado do registro, todas as aulas dele são apagadas
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('class_schedule');//caso a tabela ongs já exista, ela é apagada e no lufar vai ficar a nova tabela atualizada
};


//DEUS É TOP  