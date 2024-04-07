const express = require('express');
const router = express.Router();
const path = require('path');
const Banner = require('../Modals/userSchema');



// // multer config 

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, file_folder);
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() +"_"+ file.originalname);
//     }
// })

// const uploads = multer({ storage: storage });


// user create

router.post('/Admin/User', async (req, res) => {
    try {

        const { phone, phEmailJwt } = req.body;

        const is_phone = await Banner.findOne({phone:phone});

        if(!is_phone){

            const banner = await Banner({
                phone: phone,
                phEmailJwt:phEmailJwt,
            });
    
            const savebanner = await banner.save();
            res.status(201).json({ savebanner });

        }else{
            res.status(202).json('phone number is already exists');
        }


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})








// // update here put all entity update 





// router.put('/Admin/Banner/:id', uploads.single('file'), async (req, res) =>{
//     try {
//         const id = req.params.id;
//         const { title, bannerLink } = req.body;
//         const banner = await Banner.findByIdAndUpdate(id, {
//             title: title,
//             BannerImg: `${process.env.DOMAIN_NAME}/uploads/banner/${req.file.filename}`,
//             BannerLink: bannerLink
//         }, {new:true})


//        const update =  await banner.save();
//        res.status(201).json(update);
        
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })





// // delete all banner 


// router.delete('/Admin/Banner', async (req, res) => {
//     try {
//         const all_banners = await Banner.deleteMany();
//         res.status(201).json(all_banners);
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// })







module.exports = router;