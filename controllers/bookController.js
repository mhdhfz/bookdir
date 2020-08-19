const bookCreateGet = (req, res) => {
  res.render("books/create", { title: "New Book" });
};

module.exports = {
  bookCreateGet,
};
