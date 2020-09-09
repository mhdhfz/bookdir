const Book = require("../models/Book");

// Get all books
const booksGet = (req, res) => {
  Book.find()
    .then((result) =>
      res.render("books/index", { title: "All Books", books: result })
    )
    .catch((err) => console.log(err));
};

// get single book
const bookSingleGet = (req, res) => {
  const id = req.params.id;

  Book.findById(id)
    .then((result) => {
      res.render("books/details", { title: "Book Details", book: result });
    })
    .catch((err) => console.log(err));
};

// Get book create
const bookCreateGet = (req, res) => {
  res.render("books/create", { title: "New Book" });
};

// Post new book
const bookCreatePost = (req, res) => {
  const book = new Book(req.body);

  book
    .save()
    .then((result) => res.redirect("/books"))
    .catch((err) => console.log(err));
};

// Delete book
const bookDelete = (req, res) => {
  const id = req.params.id;
};

module.exports = {
  booksGet,
  bookSingleGet,
  bookCreateGet,
  bookCreatePost,
};
