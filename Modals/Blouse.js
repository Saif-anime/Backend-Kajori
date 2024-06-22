const mongoose = require('mongoose');

const BlouseSchema = new mongoose.Schema({
    Blouse_name:{
        type:String,
        default:"",
        required:true,
    },
  
    is_Active:{
        type:Number,
        default:1,
    },
    createAt:{type:Date,detault:Date.now},
    updateAt:{type:Date,detault:Date.now}
})

const Blouse = mongoose.model('Blouse', BlouseSchema);

module.exports = Blouse;