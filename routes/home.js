const express = require('express');
const router = express.Router();
const {routes}  = require("../controllers/home");
 
router.get("/",routes);
 
module.exports = router;