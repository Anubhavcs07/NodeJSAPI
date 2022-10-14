const express = require('express')
const dbConn = require('./config')
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
// request to get the data from browser
// response send to browser
let data = await dbConn();
data = await data.find().toArray()
console.log(data)
res.send(data)
})

app.post('/', async(req, res) => {
    let db = await dbConn()
    const result = await db.insertOne(req.body)
    if(result.acknowledged){
        console.log("data inserted")
    }
    res.send(req.body)
})

app.put('/:name',async (req,res) => {
    console.log(req.body)
    let db = await dbConn()
    let result = await db.updateOne(
        {name: req.params.name},
        {$set:req.body}
        )
        // let result = await db.updateOne(
        //     {name: req.body.name},
        //     {$set:req.body}
        //     )
    // if(result.acknowledged){
    //     console.log("data updated")
    // }
    res.send({res: "update"})
})

app.delete('/:name', async(req, res) => {
    console.log(req.body)
    const db = await dbConn()
    let result = await db.deleteOne({name: req.params.name})
    if(result.acknowledged){
        console.log("delete")
    }
    res.send({res: "delete"})
})
app.listen(5000)