const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { createItinerary, getItinerary } = require('./controllers/dataControllers');
const { getFlights, getHotels, getSites, getFlightsByOriginAndDestination, getHotelsByLocation, getSitesByLocation} = require('./controllers/iteneraryController');
const { sequelize } = require('./models');

const app = express();

app.use(express.json());
app.use(cors());

app.post("/itinerary", createItinerary);
app.get("/itinerary/:id", getItinerary);

app.get("/data/flights", getFlights);
app.get("/data/hotels", getHotels);
app.get("/data/sites", getSites);
app.get("/flights/search", getFlightsByOriginAndDestination);
app.get("/hotels/search", getHotelsByLocation);
app.get("/sites/search", getSitesByLocation);

sequelize.authenticate().then(() => {
   console.log("database connected.");
}).catch((error) => {
   console.error("Unable to connect to databse", error);
});

app.listen(3000, ()=>{
   console.log("Server is running on port 3000");
});