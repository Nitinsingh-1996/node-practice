//server.js

const express = require("express");
const app = express();

app.listen(8000, () => {
    console.log("Server Started at port no. 8000");
})

//Mongoose library instance
const mongoose = require('mongoose');
//URL of MongoDB Database
const mongoDBURL = 'mongodb+srv://ayushguptahestabit:bdwpoB6l0XeAEH9P@cluster0.iifac.mongodb.net/nitin-demo';

//connect to Database
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Connection Successful") })
    .catch((err) => { console.log("Received an Error") })