const express = require('express');
const router = express.Router();
const {tvFetch}  = require("../controllers/tv");

router.get("/",tvFetch);

module.exports = router;