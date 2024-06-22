const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        default:""
    },
    category:{
        required:true,
        type:mongoose.Schema.Types.ObjectId, ref:'Categories', required:true,
    },
    isActive:{
        type:Number,
        default:1,
    },
    createAt:{type:Date,detault:Date.now},
    updateAt:{type:Date,detault:Date.now}
})

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

module.exports = SubCategory;