/*
npm init -y
npm install  --save express
*/

const express = require("express");
const app = express();
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json(data
    );
});
app.listen(port, () => console.log('None'));