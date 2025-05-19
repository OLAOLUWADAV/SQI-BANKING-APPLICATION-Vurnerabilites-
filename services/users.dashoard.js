const db = require('./../db/db')

exports.getuser =(user) =>{ 
    return new Promise((resolve, reject) => {
        const getUser = `SELECT * FROM users WHERE id = ${user}`
        db.query(getUser, (err, result)=>{
            if (err) return reject(err);
            resolve({result})
        })
    })

}