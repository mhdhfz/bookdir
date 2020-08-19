const express = require("express");
const app = express();
const PORT = 2020;

app.get("/", (req, res) => {
  res.send("successfully setup basic server for bookdir");
});

app.listen(PORT, () => {
  console.log(`server up and running on port: ${PORT}`);
});
