const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    title:{
        type:String,
        default:""
    },
    category:{
        type:mongoose.Schema.Types.ObjectId, ref:'Categories', required:true,
    },
    createAt:{type:Date,detault:Date.now},
    updateAt:{type:Date,detault:Date.now}
})

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

module.exports = SubCategory;