const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const SubCategory = require('../Modals/SubCategorySchema');






// add category 
router.post('/Admin/subcategory',  async (req, res) => {
    try {

        const { title, category} = req.body;
     

        const banner = await SubCategory({
            title: title,
            category:category
        });

        const savebanner = await banner.save();
        res.status(201).json({ savebanner });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// all get category 

router.get('/Admin/subcategory', async (req, res) => {
    try {

        const all_banners = await SubCategory.find();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/Admin/subcategory/:id', async (req, res) => {
    try {

        const id =  Number(req.params.id);
        const all_banners = await SubCategory.find(id);
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// delete category 

router.delete('/Admin/subcategory', async (req, res) => {
    try {

        const all_banners = await SubCategory.deleteMany();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})




module.exports = router;