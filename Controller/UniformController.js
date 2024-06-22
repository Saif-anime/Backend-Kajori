const express = require('express');
const router = express.Router();
const path = require('path');
const Uniform_type = require('../Modals/Uniform_type');




// add Occasion
router.post('/Admin/Uniform_type',  async (req, res) => {
    try {

        const { Uniform_type_name} = req.body;
     
        const banner = await Uniform_type({
            Uniform_type_name: Uniform_type_name,
        });

        const savebanner = await banner.save();
        res.status(201).json({ savebanner });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// all get category 

router.get('/Admin/Uniform_type', async (req, res) => {
    try {

        const all_banners = await Uniform_type.find();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/Admin/Uniform_type/:id', async (req, res) => {
    try {

        const id =  Number(req.params.id);
        const all_banners = await Uniform_type.find(id);
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// delete category 

router.delete('/Admin/Uniform_type', async (req, res) => {
    try {

        const all_banners = await Uniform_type.deleteMany();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// delete individiual banner 

router.delete('/Admin/Uniform_type/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Find the banner by ID
        const banner = await Uniform_type.findById(id);
        if (!banner) {
            return res.status(404).json({ error: 'Banner not found' });
        }

        // Toggle isActive status
        banner.is_Active = banner.is_Active === 1 ? 0 : 1;

        // Save the updated banner
        const updatedBanner = await banner.save();

        res.status(200).json(updatedBanner); // Respond with the updated banner
    } catch (error) {
        console.error('Error updating banner isActive:', error);
        res.status(400).json({ error: error.message });
    }
})




module.exports = router;