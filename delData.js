const dbConn = require('./config')

const res = async () => {
    const db = await dbConn()
    let res = await db.deleteOne({name:'pro 5'})
    if(res.acknowledged){
        console.log("deleted")
    }
}

res()