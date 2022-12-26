
const superagent = require('superagent');
var API_URL = global.API_URL;

exports.movieController = async(req, res) => {
 try { 
  // api call for extracting all the recent anime movies
 var data = await superagent.get(API_URL +"api/movies");
 var returnData = data.body.results;
 return res.render("movies.ejs", { popular:returnData }) // rendering the movies page, displaying the api data
} catch (error) {
      console.log(error);
      res.status(404).send({
        message: "No Page Found",
        success: false,
        error,
      });
    }

 };
