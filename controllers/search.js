
const superagent = require('superagent');
var API_URL = global.API_URL;

exports.searchFetch = async(req, res) => {
    try {
      //extracting the keyword of the input query of anime search 
        var keyWord = req.query.keyword;
        if(!keyWord) {
          return res.redirect("/");
        }
        // api call for extracting the data for searched anime 
        var data = await superagent.get(API_URL +"api/search/" + keyWord + "/1");
        // error handling
        if(data.status === "404")
        {
          return res.redirect("/");
        }
        var finalData = data.body.results; 
       
        return res.render("search.ejs", { popular:finalData })
           } catch (error) {
            console.log(error);
            res.status(404).send({
              message: "No Page Found",
              success: false,
              error,
            });
          }
      
};