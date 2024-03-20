const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const Category = require('../Modals/Categories');

const file_folder = path.join(__dirname, '../uploads/category')


// multer config 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, file_folder);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() +"_"+ file.originalname);
    }
})

const uploads = multer({ storage: storage });

// add category 
router.post('/Admin/Categories', uploads.single('file'), async (req, res) => {
    try {

        const { title} = req.body;
        

        const banner = await Category({
            title: title,
            CategoryImg: `${process.env.DOMAIN_NAME}/uploads/category/${req.file.filename}`,
        });

        const savebanner = await banner.save();
        res.status(201).json({ savebanner });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// all get category 

router.get('/Admin/Categories', async (req, res) => {
    try {

        const all_banners = await Category.find();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/Admin/Categories/:id', async (req, res) => {
    try {

        const id =  req.params.id;
        const all_banners = await Category.find(id);
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// delete category 

router.delete('/Admin/Categories', async (req, res) => {
    try {

        const all_banners = await Category.deleteMany();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})




module.exports = router;