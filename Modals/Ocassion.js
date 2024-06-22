const mongoose = require('mongoose');

const OccasionSchema = new mongoose.Schema({
    Occasion_name:{
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

const Occasion = mongoose.model('Occasion', OccasionSchema);

module.exports = Occasion;