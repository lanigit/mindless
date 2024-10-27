const express = require("express");
const cors = require('cors');
const path = require('path');
// const welcome = require('../client/src/Welcome.mjs');
const PORT = process.env.PORT || 3001;
const API_TOKEN = process.env.API_TOKEN; // set this if using paid version
const app = express();
app.use(cors());
let quote = '';
let author = '';

// Handle GET requests to /newQuote route
app.get("/newQuote", (req, res) => {
    fetch('https://zenquotes.io/api/random', {
         method: "GET",
         headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
    )
    .then((response) => response.json())
    .then((data) => {
        quote = data[0].q;
        author = data[0].a
        console.log(`- ${quote}`);
        console.log(`-- ${author}\n`);
        res.send(`<h1>Welcome to simple mindful quotes!</h1>
        <h3>Quote:</h3><h4 style="color:green">${quote}</h4>\n- ${author}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
