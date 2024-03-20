const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const slugify = require('slugify');

const Product = require('../Modals/productSchema');



const file_folder = path.join(__dirname, '../uploads/product')


// multer config 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, file_folder);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    }
})

const uploads = multer({ storage: storage });


// add product here 

router.post('/Admin/product', uploads.single('file'), async (req, res) => {
    try {

        const { product_name, product_price, product_desc, product_category, sizes, gender, colors, quantity } = req.body;


        const product = await Product({
            product_name: product_name,
            product_Img: `${process.env.DOMAIN_NAME}/uploads/product/${req.file.filename}`,
            product_price: product_price,
            product_desc: product_desc,
            product_category: product_category,
            sizes: sizes,
            gender: gender,
            colors: colors,
            quantity: quantity,
            slug: slugify(product_name, { lower: true }) + Date.now()
        })





        const saveproduct = await product.save();
        res.status(201).json(saveproduct);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})



// get product here 

router.get('/Admin/product', async (req, res) => {
    try {

        const all_product = await Product.find();
        res.status(201).json(all_product);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})




// get product with slug 

router.get('/Admin/product/:slug', async (req, res) => {
    try {


        const all_product = await Product.findOne({ slug: req.params.slug })
        res.status(201).json([all_product]);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})





// delete all banner 


router.delete('/Admin/product', async (req, res) => {
    try {
        const all_banners = await Product.deleteMany();
        res.status(201).json(all_banners);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})



module.exports = router;