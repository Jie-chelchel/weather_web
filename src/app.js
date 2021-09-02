const express = require("express");

const app = express();

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
app.listen("3000", () => {
  console.log("Listening on port: 3000");
});
