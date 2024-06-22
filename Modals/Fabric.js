const mongoose = require('mongoose');

const FabricSchema = new mongoose.Schema({
    fabric_name:{
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

const Fabric = mongoose.model('Fabric', FabricSchema);

module.exports = Fabric;