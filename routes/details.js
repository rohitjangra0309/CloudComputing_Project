const express = require('express');
const router = express.Router();
const {detailsFetch}  = require("../controllers/details");

router.get("/:id",detailsFetch);

module.exports = router;

