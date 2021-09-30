var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '4312',
      database : 'apiusers'
    }
  });//exportando a conexão já configurada para não precisar ficar escrevendo isso sempre que quisermos realizar uma operação no banco de dados

module.exports = knex