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
router.post('/Admin/product', uploads.array('file', 8), async (req, res) => {
    try {
        const {
            product_name, blouse_type, febric, product_subcategory, uniform_type, occasion,
            offer, discount, blouse_added, blouse_dimension, online_price, age_upper_limit,
            age_lower_limit, wash_care, premium, out_of_stock, actual_price, product_desc,
            product_category, sizes, gender, colors, quantity
        } = req.body;

     

        // Check if files were uploaded
        if (!req.files || req.files.length === 0) {
            console.log('no file uploaded')
            console.log(req.files)
            return res.status(400).json({ error: 'No files uploaded' });
        }



        // Process each uploaded file
        const productImages = req.files.map(file => ({product_Img: `${process.env.DOMAIN_NAME}/uploads/product/${file.filename}`}));

        const product = await Product({
            product_name, product_desc, product_category, product_subcategory,
            Blouse_type: blouse_type, Occasion: occasion, fabric: febric, Offer: offer,
            Discount: discount, Uniform_type: uniform_type, Age_Upper_Limit: age_upper_limit,
            Age_Lower_Limit: age_lower_limit, Blouse_Added: blouse_added,
            Blouse_Dimension: blouse_dimension, sizes, gender, wash_care, Premium: premium,
            Out_of_Stock: out_of_stock, Online_price: online_price, Actual_price: actual_price,
            colors, quantity, slug: slugify(product_name, { lower: true }) + Date.now(),
            product_Img: productImages // Assign the processed images to the product
        });

        const saveproduct = await product.save();
        console.log(saveproduct);
        res.status(201).json(saveproduct);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});




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


// delete individiual banner 

router.delete('/Admin/product/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Find the banner by ID
        const banner = await Product.findById(id);
        if (!banner) {
            return res.status(404).json({ error: 'Banner not found' });
        }

        // Toggle isActive status
        banner.isActive = banner.isActive === 1 ? 0 : 1;

        // Save the updated banner
        const updatedBanner = await banner.save();

        res.status(200).json(updatedBanner); // Respond with the updated banner
    } catch (error) {
        console.error('Error updating banner isActive:', error);
        res.status(400).json({ error: error.message });
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