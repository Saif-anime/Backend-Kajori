const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    cart:[{
        product:{type:mongoose.Schema.Types.ObjectId, ref:'Product', required:true},
        quantity:{type:Number, default:1}
    }]
,
createAt:{type:Date,detault:Date.now},
updateAt:{type:Date,detault:Date.now}
})

const User = mongoose.model('User', UserSchema);

module.exports = User;