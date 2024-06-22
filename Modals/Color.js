const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
    Color_name:{
        type:String,
        required:true,
        default:""
    },
    is_Active:{
        type:Number,
        default:1,
    },
    createAt:{type:Date,detault:Date.now},
    updateAt:{type:Date,detault:Date.now}
})

const Color = mongoose.model('Color', ColorSchema);

module.exports = Color;