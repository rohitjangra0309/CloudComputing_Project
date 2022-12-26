
const express = require('express');
const router = express.Router();
const {watchController}  = require("../controllers/watch");

router.get("/:id",watchController);

module.exports = router;
