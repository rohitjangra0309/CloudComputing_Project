// let update_list = require("./update_list.js");
module.exports = async function (API_URL, SECS) {
  console.log("CHECKING API URL...");
  var cutted;

  if (API_URL.includes("https")) {
    cutted = API_URL.replace("https://", "");
    if (cutted.includes("/")) {
      console.log("CHECK SUCCESSFULL. API URL IS VALID.");
      return `${API_URL}`;
    }
  } else if (API_URL.includes("http")) {
    cutted = API_URL.replace("http://", "");
    if (!cutted.includes("/")) {
      console.log("CHECK SUCCESSFULL. API URL IS VALID.");
      return `${API_URL}/`;
    }
  }
};
