const express = require('express');
const router = express.Router();
const path = require('path');
const Offer = require('../Modals/Offer');




// add Occasion
router.post('/Admin/Offer',  async (req, res) => {
    try {

        const { Offer_name, start_date, end_date} = req.body;
     
        const banner = await Offer({
            Offer_name: Offer_name,
            Start_Date:start_date,
            End_Date:end_date
        });

        const savebanner = await banner.save();
        res.status(201).json({ savebanner });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// all get category 

router.get('/Admin/Offer', async (req, res) => {
    try {

        const all_banners = await Offer.find();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/Admin/Offer/:id', async (req, res) => {
    try {

        const id =  Number(req.params.id);
        const all_banners = await Offer.find(id);
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// delete category 

router.delete('/Admin/Offer', async (req, res) => {
    try {

        const all_banners = await Offer.deleteMany();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// delete individiual banner 

router.delete('/Admin/Offer/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Find the banner by ID
        const banner = await Offer.findById(id);
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