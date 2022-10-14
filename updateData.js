const dbConn = require('./config')

const updateData = async () =>{
    let data = await dbConn()
    //updateOne to update single and first record 
    //updateMany to update mulitple records
    let res = await data.updateMany(
        {name:'max pro 5'},{
            $set:{name:'pro 5', price: 420}
        }
    )
    console.log(res)
}

updateData()