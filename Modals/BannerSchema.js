const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    title:{
        type:String,
        default:""
    },
    BannerImg:{
        type:String,
        default:"",
    },
    BannerLink:{
        type:String,
        default:"",
    },
    createAt:{type:Date,detault:Date.now},
    updateAt:{type:Date,detault:Date.now}
})

const Banner = mongoose.model('Banner', BannerSchema);

module.exports = Banner;