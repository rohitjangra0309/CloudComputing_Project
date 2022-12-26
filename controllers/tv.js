const superagent = require("superagent");
var API_URL = global.API_URL;

exports.tvFetch = async (req, res) => {
  try {
    // api call for extracting tv series 
    var data = await superagent.get(API_URL + "api/tv-shows");
    var finalData = data.body.results;
    return res.render("tvSeries.ejs", { popular: finalData });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      message: "No Page Found",
      success: false,
      error,
    });
  }
};
