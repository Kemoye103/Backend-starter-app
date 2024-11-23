const express = require(`express`);
const dotenv = require('dotenv');
const connectDB = require("./config/connectDB");

// Initialling
const app = express();

// load environment variables
dotenv.config({path: ".env"});

app.use(express.json()); //Body parser

connectDB();

const PORT = 5000;

const server =app.listen(PORT,
    console.log(`Server running on ${PORT}`)
    

)