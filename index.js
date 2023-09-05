//Connection with atlas and starting server


// Importing express module
const express = require("express"); 

// Importing app.js
const app = require("./app");

// Importing Mongoose 
const mongoose = require("mongoose"); 

// Setting port number
const port = process.env.port || 3000;


// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());

app.use(express.urlencoded({ extended: false })); 


// Connection
const DATABASE_URL = "mongodb+srv://madijha001:sGlISIZztM4Imtnm@ytsubs.90e20ey.mongodb.net/test";
mongoose.connect(DATABASE_URL, {
useNewUrlParser: true
});

const dataBase = mongoose.connection;
// Handling database connection errors
dataBase.on("error", (err) => console.log(err)); 
// Logging in successful database connection
dataBase.once("open", () => console.log("connected to database")); 


// Start the server
app.listen(port, () => console.log(`App is up on port ${port}`));