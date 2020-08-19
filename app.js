const express = require("express");
const app = express();
const PORT = 2020;

// register view engine
app.set("view engine", "ejs");

//  static folder
app.use(express.static("public"));

// route to homepage
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.listen(PORT, () => {
  console.log(`server up and running on port: ${PORT}`);
});
