const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_name:{
        type:String,
        default:""
    },
    Online_price:{
        type:String,
        default:""
    },
    Actual_price:{
        type:String,
        default:""
    },
    
    product_Img:{
        type:Array,
        required:true,
    },
  
    product_desc:{
        type:String,
        required:true,
    },
    wash_care:{
        type:String,
        default:"false"
    },
    Premium:{
        type:String,
        default:"false"
    },
    Out_of_Stock:{
        type:String,
        default:"false"
    },
    Age_Lower_Limit:{
        type:String,
        default:""
    },
    Age_Upper_Limit:{
        type:String,
        default:"false"
    },
    Blouse_Added:{
        type:String,
        default:""
    },
    Blouse_Dimension:{
        type:String,
        default:""
    },
    Blouse_type:{
        type:mongoose.Schema.Types.ObjectId, ref:'Blouse', required:true,
    },
    Occasion:{
        type:mongoose.Schema.Types.ObjectId, ref:'Ocassion', required:true,
    },
    Offer:{
        type:mongoose.Schema.Types.ObjectId, ref:'Offer', required:true,
    },
    Discount:{
        type:mongoose.Schema.Types.ObjectId, ref:'Discount', required:true,
    },
    Uniform_type:{
        type:mongoose.Schema.Types.ObjectId, ref:'Uniform_type', required:true,
    },
    product_category:{
        type:mongoose.Schema.Types.ObjectId, ref:'Categories', required:true,
    },
    product_subcategory:{
        type:mongoose.Schema.Types.ObjectId, ref:'SubCategorySchema', required:true,
    },
    isActive: {
        type: Number,
        default: 1,
    },
    sizes:[{type:String, enum:['XS', 'S', 'M', 'L', 'XL', 'XXL']}],
    gender:{type:String, required:true},
    colors:{type:Array, required:false},
    quantity:{type:Number, defualt:0},
    fabric:{
        type:mongoose.Schema.Types.ObjectId, ref:'FabricSchema', required:false,
    },
    slug:{type:String, required:true, unique:true},
    createAt:{type:Date,detault:Date.now},
    updateAt:{type:Date,detault:Date.now}
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;