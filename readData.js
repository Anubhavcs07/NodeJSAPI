const dbConn = require('./config')

//get data
const main = async () =>{
    let data = await dbConn()
    data = await data.find({brand:'Samsung'}).toArray()
    console.log(data)
}

main()