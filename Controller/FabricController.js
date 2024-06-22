const express = require('express');
const router = express.Router();
const path = require('path');
const Fabric = require('../Modals/Fabric');




// add fabric
router.post('/Admin/Fabric',  async (req, res) => {
    try {

        const { fabric_name} = req.body;
        console.log(fabric_name)
     
        const banner = await Fabric({
            fabric_name: fabric_name,
        });

        const savebanner = await banner.save();
        res.status(201).json({ savebanner });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// all get category 

router.get('/Admin/Fabric', async (req, res) => {
    try {

        const all_banners = await Fabric.find();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/Admin/Fabric/:id', async (req, res) => {
    try {

        const id =  Number(req.params.id);
        const all_banners = await Fabric.find(id);
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// delete category 

router.delete('/Admin/Fabric', async (req, res) => {
    try {

        const all_banners = await Fabric.deleteMany();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// delete individiual banner 

router.delete('/Admin/Fabric/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Find the banner by ID
        const banner = await Fabric.findById(id);
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