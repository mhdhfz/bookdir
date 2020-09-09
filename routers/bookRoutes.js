const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();

// GET all Books
router.get("/", bookController.booksGet);

// GET /books/create
router.get("/create", bookController.bookCreateGet);
// GET /books/details
router.get("/details/:id", bookController.bookSingleGet);
// POST /books/create
router.post("/create", bookController.bookCreatePost);
// update
// delete

module.exports = router;
