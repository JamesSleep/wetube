import express from "express";
const app = express();

const port = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${port}`);


const handleHome = (req, res) => res.send("home");

const handleProfile = (req, res) => res.send("profile");


app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(port, handleListening);