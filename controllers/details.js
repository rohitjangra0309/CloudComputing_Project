const superagent = require('superagent');
var API_URL = global.API_URL;

exports.detailsFetch = async(req, res) => {
  try {
    // check if the req contains something or not
    if (!req.params.id) {
      return res.redirect("/");
    }
    // making api call to extract info of anime like genre, episode counts etc.
    var resultData = await superagent.get(API_URL + "api/details/" + req.params.id);
    var finalData = await resultData.body;
    return res.render("movieDetail.ejs", { finalData: finalData.results[0] }); // rendering the corresponding pages for display the data recieved for api
  } catch (error) {
    console.log(error);
    res.status(404).send({
      message: "No Page Found",
      success: false,
      error,
    });
  }
};
