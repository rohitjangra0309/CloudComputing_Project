const express = require('express');
const router = express.Router();
const {searchFetch}  = require("../controllers/search");

router.get("/",searchFetch);

module.exports = router;