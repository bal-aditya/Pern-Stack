const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'practice',
    password: 'postgresql',
    port: 5432,
});


module.exports=pool;