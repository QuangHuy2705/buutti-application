import mysql from 'mysql'

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'buutti'
})

db.connect(err => {
    if (err) {
        throw err
    } else {
        console.log(`mySQL connected`)
    }
})

export default db