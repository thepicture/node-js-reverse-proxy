const { default: axios } = require("axios");
require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.post("/", async (req, res) => {
    const config = {
        headers: {
            ...req.headers
        },
    };
    console.log("Request headers: " + JSON.stringify(req.headers));
    const response = await axios.post(process.env.POST_TO, config);
    console.log("Response status code: " + response.status);
    res.send(response.data);
});

app.get("/", async (req, res) => {
    const config = {
        headers: {
            ...req.headers, host: process.env.HOST
        },
    };
    console.log("Request headers: " + JSON.stringify(req.headers));
    const response = await axios.get(process.env.GET_FROM, config);
    console.log("Response status code: " + response.status);
    res.send(response.data);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port " + PORT + "...");
})