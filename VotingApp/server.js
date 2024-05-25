const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

const logrequest=(req,res,next=>{
    console.log(`${new Date().toLocaleString}`,'request made at'`${req.originalUrl}`);
    next();
})

app.use(logrequest);

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

//Listing on port 3000


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})