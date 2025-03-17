const {createPool} = require('mysql')
const createPool =createPool({
    host: "localhost",
    user: "root",
    password: "rootuser",
    connectionLimit: 10
})
createPool.query('select* from apidb.users', (err, res)=>{
    return console.log(res)
})