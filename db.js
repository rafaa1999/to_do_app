const Pool=require('pg').Pool

const pool=new Pool({
    user:"postgres",
    password:"1999",
    host:"localhost",
    port:"5432",
    database:"pern_to_do",
})

module.export=pool