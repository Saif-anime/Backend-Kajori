const mongoose = require('mongoose');

const conn = async() =>{
    await mongoose.connect(`${process.env.MONGODB}`);
    console.log('database connection ');
}

conn();


module.exports = conn;