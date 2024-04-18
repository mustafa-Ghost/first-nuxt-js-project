
const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const ItemSchema = new Schema({
    image:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true,
        default:1,
        min:1
    },
    price: {
        type:Number,
        require:true,
        default:1,
    },
    id: {
        type:Number,
        require:true,
    }
})

const Item = mongoose.model('items', ItemSchema)
module.exports =  Item