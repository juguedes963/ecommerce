exports.up = function(knex) {
    
    return knex.schema.createTable('usuarios',function(table){
        table.increments('userId')
         table.string('name').notNullable()
         table.string('senha').notNullable()
         table.string('email').notNullable()
         table.string('whatsapp').notNullable()     
         table.string('enderecao').notNullable()     
        
     })
   };
   
   exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')
   };