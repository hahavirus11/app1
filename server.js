const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
  res.send({ good: "morning" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
