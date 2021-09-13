/*
npm init -y
npm install  --save express
*/

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json([{
        tele: "shin",
    }
    ]);
});
app.listen(port, () => console.log('None'));