/*
npm init -y
npm install  --save express
*/

const express = require("express");
const app = express();
const fs = require("fs");
const cors = require('cors');
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const port = process.env.PORT || 3000;
app.use(cors());
app.get("/", (req, res) => {
    res.json(data
    );
    //res.send("asdfasf")
});
app.listen(port, () => console.log('None'));