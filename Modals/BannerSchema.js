const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        default:""
    },
    BannerImg:{
        type:String,
        default:"",
        required:true,
    },
    BannerLink:{
        type:String,
        default:"",
    },
    isActive:{
        type:Number,
        default:1,
    },
    createAt:{type:Date,detault:Date.now},
    updateAt:{type:Date,detault:Date.now}
})

const Banner = mongoose.model('Banner', BannerSchema);

module.exports = Banner;