const mongoose = require('mongoose');

const Uniform_typeSchema = new mongoose.Schema({
    Uniform_type_name:{
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

const Uniform_type = mongoose.model('Uniform_type', Uniform_typeSchema);

module.exports = Uniform_type;