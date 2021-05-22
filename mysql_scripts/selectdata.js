const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'
})

connection.query(
    `SELECT * FROM persons` , 
    function(err , results , fields) {   // Here results are rows ans fields are cols
        if(err) {
            console.log(err)
        }else{
            console.log(results)
            console.log(fields)
        }
        // connection.close()
    }
)