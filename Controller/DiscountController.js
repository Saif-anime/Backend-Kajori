const express = require('express');
const router = express.Router();
const path = require('path');



const Discount = require('../Modals/Discount');




// add discount
router.post('/Admin/Discount',  async (req, res) => {
    try {

        const { Discount_name, start_date, end_date} = req.body;
     
        const banner = await Discount({
            Discount_name: Discount_name,
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

router.get('/Admin/Discount', async (req, res) => {
    try {

        const all_banners = await Discount.find();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/Admin/Discount/:id', async (req, res) => {
    try {

        const id =  Number(req.params.id);
        const all_banners = await Discount.find(id);
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// delete category 

router.delete('/Admin/Discount', async (req, res) => {
    try {

        const all_banners = await Discount.deleteMany();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// delete individiual banner 

router.delete('/Admin/Discount/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Find the banner by ID
        const banner = await Discount.findById(id);
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