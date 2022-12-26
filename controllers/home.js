const db = require("quick.db");

exports.routes = async (req, res) => {
  try {
    // checking if there is popular anime in our database
    var popular = db.fetch("popular");

    return res.render("homePage.ejs", { popular: popular }); // rendering the homepage but displaying the popular animes
  } catch (error) {
    console.log(error);
    res.status(404).send({
      message: "No Page Found",
      success: false,
      error,
    });
  }
};
