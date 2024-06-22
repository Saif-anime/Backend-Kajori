const express = require('express');
const router = express.Router();
const path = require('path');
const Occasion = require('../Modals/Ocassion');




// add Occasion
router.post('/Admin/Occasion',  async (req, res) => {
    try {

        const { Occasion_name} = req.body;
     
        const banner = await Occasion({
            Occasion_name: Occasion_name,
        });

        const savebanner = await banner.save();
        res.status(201).json({ savebanner });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// all get category 

router.get('/Admin/Occasion', async (req, res) => {
    try {

        const all_banners = await Occasion.find();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/Admin/Occasion/:id', async (req, res) => {
    try {

        const id =  Number(req.params.id);
        const all_banners = await Occasion.find(id);
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// delete category 

router.delete('/Admin/Occasion', async (req, res) => {
    try {

        const all_banners = await Occasion.deleteMany();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})




// delete individiual banner 

router.delete('/Admin/Occasion/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Find the banner by ID
        const banner = await Occasion.findById(id);
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