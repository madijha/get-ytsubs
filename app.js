//Handling APIs requests and responses

const express = require("express");
const path = require("path");

// Import the subscriber model
const schema = require("./models/subscribers");

// Import the 'error' object
const { error } = require("console");

const app = express();

//PARSING JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HOME
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

//SHOWS ALL THE SUBSCRIBERS
app.get("/subscribers", async (req, res, next) => {
  try {
    // Retrieve all subscribers from the schema/model
    let subscribers = await schema.find();
    // Send the subscribers as a JSON response with a status of 200 (OK)
    res.status(200).json(subscribers);
  } catch (err) {
    // Set the response status to 400 (Bad Request)
    res.status(400);
    // Pass the error to the error handling middleware
    next(err);
  }
});

//SHOWS SUBSCRIBERS WITH NAMES AND SUBSCRIBED CHANNEL
app.get("/subscribers/names", async (req, res, next) => {
  try {
    // Retrieve subscribers with only the name and subscribedChannel fields from schema/model
    let subscribers = await schema.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
    // Send the subscribers as a JSON response with a status of 200 (OK)
    res.status(200).json(subscribers);
  } catch (err) {
    // Set the response status to 400 (Bad Request)
    res.status(400);
    // Pass the error to the error handling middleware
    next(err);
  }
});

//SHOWS SUBSCRIBERS WITH SPECIFIC ID
app.get("/subscribers/:id", async (req, res) => {
  try {
    // Extract the ID parameter from the request URL
    const id = req.params.id;
    if (!id) {
      // Send a JSON response with a status of 400 (Bad Request)
      res.status(400).json({ message: "No ID provided" });
      return;
    }

    const subscriber = await schema.findById(id);
    if (!subscriber) {
      res.status(404).json({ message: "Subscriber not found" });
      return;
    }

    res.send(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// HANDLES ALL THE UNWANTED REQUESTS.
app.use((req, res) => {
  // Send a JSON response with a status of 404 (Not Found)
  res.status(404).json({ message: "Error - Route not found" });
});

module.exports = app; // Export the Express application
