const mongoose = require('mongoose');

const URL =  'mongodb://127.0.0.1/notes-poojitha';
async function connectDB(){
    mongoose.connect(URL);
}

module.exports = connectDB;