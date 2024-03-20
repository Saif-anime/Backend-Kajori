const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Banner = require('../Modals/BannerSchema');
const file_folder = path.join(__dirname, '../uploads/banner')


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


// add banner here 

router.post('/Admin/Banner', uploads.single('file'), async (req, res) => {
    try {

        const { title, bannerLink } = req.body;
        

        const banner = await Banner({
            title: title,
            BannerImg: `${process.env.DOMAIN_NAME}/uploads/banner/${req.file.filename}`,
            BannerLink: bannerLink
        });

        const savebanner = await banner.save();
        res.status(201).json({ savebanner });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


// get banner here 

router.get('/Admin/Banner', async (req, res) => {
    try {

        const all_banners = await Banner.find();
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})



// single banner here 

router.get('/Admin/Banner/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const all_banners = await Banner.findById(id);
        res.status(201).json(all_banners);


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})



// update here put all entity update 





router.put('/Admin/Banner/:id', uploads.single('file'), async (req, res) =>{
    try {
        const id = req.params.id;
        const { title, bannerLink } = req.body;
        const banner = await Banner.findByIdAndUpdate(id, {
            title: title,
            BannerImg: `${process.env.DOMAIN_NAME}/uploads/banner/${req.file.filename}`,
            BannerLink: bannerLink
        }, {new:true})


       const update =  await banner.save();
       res.status(201).json(update);
        
    } catch (error) {
        res.status(400).send(error)
    }
})





// delete all banner 


router.delete('/Admin/Banner', async (req, res) => {
    try {
        const all_banners = await Banner.deleteMany();
        res.status(201).json(all_banners);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})







module.exports = router;