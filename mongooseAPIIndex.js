const express = require('express')
require('./mongooseAPIConfig')
const product = require('./mongooseAPIProduct')
const app = express()
app.use(express.json())

app.post('/post', async (req, res) => {
    let data = new product(req.body)
    let result = await data.save()
    res.send(result)
    console.log(result)
})

app.get('/get', async(req,res) => {
    console.log(await req.body.name)
    let data =await product.find({name: req.body.name})
    res.send(data)
})

app.put('/put/:name', async(req,res) => {
    let data = await product.updateOne(
        {name: req.params.name},
        {$set: req.body}
    )
    console.log(req.body, data)
    res.send(req.body)
})

app.delete('/delete/:name', async(req,res) => {
    let data = await product.deleteOne({name: req.params.name})
    res.send(req.body)
})


app.listen(5000)