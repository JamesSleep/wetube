const express = require("express");
const app = express();

const port = 4000;

function handleListening() {
  console.log(`Listening on : http://localhost:${port}`);
}

function handleHome(req, res) {
  res.send("home");
}
function handleProfile(req, res) {
  res.send("profile");
}

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(port, handleListening);