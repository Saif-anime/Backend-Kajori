const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
    Discount_name:{
        type:String,
        required:true,
        default:""
    },
    Start_Date:{
        type:Date,
        required:true
    },
    End_Date:{
        type:Date,
        required:true
    },
    is_Active:{
        type:Number,
        default:1,
    },
    createAt:{type:Date,detault:Date.now},
    updateAt:{type:Date,detault:Date.now}
})

const Discount = mongoose.model('Discount', DiscountSchema);

module.exports = Discount;