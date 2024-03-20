const express = require('express');
const app = express();
const port = 3001 || process.env.PORT;
const cors = require('cors');
const path = require('path');


require('dotenv').config()

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'))
const conn = require('./conn');
app.use(require('./Controller/BannerController'));
app.use(require('./Controller/productController'));
app.use(require('./Controller/CategoryController'));



app.get('/', (req, res) => {
    res.send("hello world");
})



app.listen(port, () =>{
    console.log(`the server run port no ${port}`);
})
