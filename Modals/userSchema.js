const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
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
    phEmailJwt: String,
createAt:{type:Date,detault:Date.now},
updateAt:{type:Date,detault:Date.now}
})

const User = mongoose.model('User', UserSchema);

module.exports = User;