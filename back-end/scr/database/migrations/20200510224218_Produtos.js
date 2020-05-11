exports.up = function(knex) {
    
    return knex.schema.createTable('produto',function(table){
        table.increments('ProdutoId')
         table.string('NomeProduto').notNullable()
         table.string('CodigoBarra').notNullable()
         table.string('preco').notNullable()
         table.string('modelo').notNullable()     
         table.string('ano').notNullable()     
        
     })
   };
   
   exports.down = function(knex) {
    return knex.schema.dropTable('produto')
   };