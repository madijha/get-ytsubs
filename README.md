# Almabetter Backend Capstone Project - Get YouTube Subscribers

A simple backend project to get YouTube Subscribers, with RESTful API for getting information about YouTube channel subscribers, developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB Atlas. 

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.

# API Endpoints:-

"/ " --> This default route will render the "index.html file" when the app launches. http://localhost:3000/

"/subscribers " --> This endpoint returns an array of all subscribers in the database. http://localhost:3000/subscribers

"/subscribers/names " --> This endpoint returns an array of subscribers with only two fields, their name and subscribed channel. http://localhost:3000/subscribers/names

"/subscribers/:id " --> This returns the details of subscriber whose Id is provided in endpoint. http://localhost:3000/subscribers/:id


You'll need to have Node.js and MongoDB installed on your local machine in order to begin working on the project. Once installed, Clone this repository to your local machine. Install the required dependencies and start the server by nodemon or node index.js

# Dependencies:-

express
mongoose
nodemon (optional)
mochawesome

# Deployment:-

Cyclic platform is used for deployment. It's a free web services platform.


# Web link:- 

https://relieved-puce-pangolin.cyclic.app/
