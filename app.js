const express = require('express');
const app = express();
const port = 3001 || process.env.PORT;
const cors = require('cors');
const path = require('path');
const uniqid = require('uniqid')
const axios = require('axios');
var bodyParser = require('body-parser')
const sha256 = require('sha256')
const Razorpay = require('razorpay'); 

// This razorpayInstance will be used to
// access any resource from razorpay
const razorpayInstance = new Razorpay({

  // Replace with your key_id
  key_id: 'rzp_test_rxF7o4kIyZLWXm',

  // // Replace with your key_secret
  // key_secret: YAEUthsup8SijNs3iveeVlL1
});


require('dotenv').config()

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/uploads', express.static('uploads'))
const conn = require('./conn');
app.use(require('./Controller/BannerController'));
app.use(require('./Controller/productController'));
app.use(require('./Controller/CategoryController'));
app.use(require('./Controller/SubCategoryController'));
app.use(require('./Controller/userController'));
app.use(require('./Controller/BlouseController'))
app.use(require('./Controller/ColorController'))
app.use(require('./Controller/DiscountController'))
app.use(require('./Controller/FabricController'))
app.use(require('./Controller/OcassionController'))
// app.use(require('./Controller/OrderController'))
app.use(require('./Controller/UniformController'))
app.use(require('./Controller/OfferController'))


app.get('/', (req, res) => {
  res.send("hello world");
})






// phone pay integation  

//Inside app.js
app.post('/createOrder', (req, res)=>{ 

  // STEP 1:
  const {amount,currency,receipt, notes}  = req.body;      
      
  // STEP 2:    
  razorpayInstance.orders.create({amount, currency, receipt, notes}, 
      (err, order)=>{
      
        //STEP 3 & 4: 
        if(!err)
          res.json(order)
        else
          res.send(err);
      }
  )
});






app.listen(port, () => {
  console.log(`the server run port no ${port}`);
})
