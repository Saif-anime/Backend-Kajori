const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
    Offer_name:{
        type:String,
        default:"",
        required:true,
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

const Offer = mongoose.model('Offer', OfferSchema);

module.exports = Offer;