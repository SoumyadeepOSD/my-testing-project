const mongoose = require("mongoose");
require('dotenv').config();
const CONNECTION_URL = process.env.CONNECTION_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(CONNECTION_URL);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;