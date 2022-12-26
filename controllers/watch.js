var API_URL = global.API_URL;
const superagent = require("superagent");

exports.watchController = async (req, res) => {
  // api call for extracting the episode to watch
  try {
    if (!req.params.id) {
      return res.redirect("/");
    }
    var episodes = req.params.id.split("-episode-");

    var tempData = await superagent.get(
      API_URL + "api/watching/" + episodes[0] + "/" + episodes[1]
    );

    var data = await tempData.body;
    return res.render("watch.ejs", {
      data: data,
      API_URL: API_URL,
      episodes: episodes,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      message: "No Page Found",
      success: false,
      error,
    });
  }
};
