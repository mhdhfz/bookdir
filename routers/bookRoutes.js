const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();

// GET /books/create
router.get("/create", bookController.bookCreateGet);
// post
// update
// delete

module.exports = router;
