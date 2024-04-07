const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_name:{
        type:String,
        default:""
    },
    product_Img:{
        type:String,
        required:true,
    },
    product_price:{
        type:String,
        required:true,

    },
    product_desc:{
        type:String,
        required:true,
    },
    product_category:{
        type:mongoose.Schema.Types.ObjectId, ref:'SubCategorySchema', required:true,
    },
    sizes:[{type:String, enum:['XS', 'S', 'M', 'L', 'XL', 'XXL']}],
    gender:{type:String, required:true},
    colors:{type:String, default:""},
    quantity:{type:Number, defualt:0},
    slug:{type:String, required:true, unique:true},
    createAt:{type:Date,detault:Date.now},
    updateAt:{type:Date,detault:Date.now}
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;