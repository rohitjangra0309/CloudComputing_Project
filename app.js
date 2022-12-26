// files contain the backend code
require("dotenv").config(); // for importing enviroment variables from .env file
const express = require("express"); // express for routing
const superagent = require("superagent"); // for making api calls
const quickDB = require("quick.db"); // for storing popular anime, which helps our page to load faster
const app = express(); 
let checkAPI = require("./functions/check_api_url.js"); // function for validating api url.

module.exports = async function () {
  app.set("view engine", "ejs"); // setting up the views in ejs, used ejs because we can dealing with dynamic data and html cant handle that
  app.use(express.json()); 
  app.use(express.urlencoded({ extended: false }));
  var SECS = process.env.TIME + "000"; // setting the time for updating the popular list
  global.SECS = SECS; // making it global of we can use it in different files
  const temp_PORT = process.env.PORT || 8000; // setting by the port from .env file
  var PORT = 0;
  // checking if the port is empty or not
  try { 
    if (!isNaN(temp_PORT)) {
      console.log("Checking PORT, PORT is empty");
      PORT = temp_PORT;
    } else {
      console.log("Checking PORT, PORT is busy");
      PORT = temp_PORT;
    }
  } catch (error) {
    console.log(error);
  }
  // valdating the api url
  var temp_API = process.env.API_URL;
  const API_URL = await checkAPI(temp_API, SECS);
  global.API_URL = API_URL; // making it global of we can use it in different files
  try {
    var result0 = await superagent.get(API_URL + "api/popular/1"); // api call for fetching popular anime and storing them in the db for fast page loading
    quickDB.set(`popular`, result0.body.results);
  } catch (error) {
    return console.log(error);
  }

  app.use(express.static("static")); // inserting the static images, dom, and css files
  // extracting the routes from routes folder
  const home = require("./routes/home.js"); 
  const animeDetails = require("./routes/details.js"); 
  const search = require("./routes/search.js"); 
  const movies = require("./routes/movies.js");
  const tvShows = require("./routes/tvshows.js");
  const details = require("./routes/anime.js");
  const watch = require("./routes/watch.js");

  // setting up different routes
  app.use("/", home);
  app.use("/details", animeDetails);
  app.use("/search", search);
  app.use("/movies", movies);
  app.use("/tv-shows", tvShows);
  app.use("/details", details);
  app.use("/watch", watch);
  
  
  app.listen(PORT, () => {
    console.log(`app is running at ${PORT}`); // started the server 
  });

  
};
