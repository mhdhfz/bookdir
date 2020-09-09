const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routers/bookRoutes");
const app = express();
const PORT = 2020;

const dbURI = "mongodb://localhost:27017/book-directory";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(PORT, () => {
      console.log(`server up and running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

//  static folder
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// route to homepage
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.use("/books", bookRoutes);
