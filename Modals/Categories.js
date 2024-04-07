const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title:{
        type:String,
        default:""
    },
    CategoryImg:{
        type:String,
        required:true,
        default:"",
    },
    
    createAt:{type:Date,detault:Date.now},
    updateAt:{type:Date,detault:Date.now}
})

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;