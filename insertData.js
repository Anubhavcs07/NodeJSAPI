const dbConn = require('./config')

const insert = async () =>{
    const db = await dbConn()
    const result = await db.insertOne({
        name:"Note 5",
        brand:"Samsung",
        prince: 320,
        category:"Mobile"
    })
    if(result.acknowledged){
        console.log("data inserted")
    }
}

insert()