const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/e-comm")
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
})

const saveDb = async () => {
    const productModel = mongoose.model('products', productSchema)
    let data = new productModel({
        name: 'm8 pro', 
        price: 1200, 
        brand: 'Samsung', 
        category: "mobile"
    })
    let result = await data.save()
    console.log(result)
}

const updateDb = async() => {
    const productModel = mongoose.model('products', productSchema)
    let data = await productModel.updateOne(
        {name: 'pro 5'},
        {$set:{price: 1300, name: 'pro 6'}}
    )
}

const deleteDb = async() => {
    const productModel = mongoose.model('products', productSchema)
    let data = await productModel.deleteOne({name: 'pro 5'})
}

const findDb = async() => {
    const productModel = mongoose.model('products', productSchema)
    let data = await productModel.find({name: 'pro 5'})
    console.log(data)
}

findDb()