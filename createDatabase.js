//Creating database in Atlas


const mongoose = require("mongoose"); 
const subscriberModel = require("./models/subscribers"); 
const data = require("./data"); 

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://madijha001:sGlISIZztM4Imtnm@ytsubs.90e20ey.mongodb.net/test";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true
});


//database object
const dataBase = mongoose.connection; 
// When connection errors
dataBase.on("error", (err) => console.log(err)); 
//When successful connection
dataBase.once("open", () => console.log("Database created..."));


// Function to refresh data in the database
const updatedDB = async () => {
  //Delete all documents in the "subscribers" 
  await subscriberModel.deleteMany({}); 
  // Insert new documents into the "subscribers" 
  await subscriberModel.insertMany(data); 
  // Disconnect from database
  await mongoose.disconnect(); 
};

updatedDB(); 