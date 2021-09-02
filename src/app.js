const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
  res.send({ name: "ddd", age: 2 });
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/weather", (req, res) => {
  res.send({ forecasth: "snowing", location: "longmont" });
});
app.listen(port, () => {
  console.log("Listening on port: " + port);
});
