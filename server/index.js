const express = require("express");
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3001;
const API_TOKEN = process.env.API_TOKEN; // set this if using paid version
const app = express();
app.use(cors());
let quote = '';
let author = '';


// EXAMPLE REQUEST
// fetch('https://zenquotes.io/api/random')
//     .then((response) => response.text())
//     .catch(err => console.log(err))
// .then((body) => {
//     // console.log(JSON.parse(body)[0]) // original nested JSON object
//     quote = JSON.parse(body)[0].q;
//     author = JSON.parse(body)[0].a;
//     console.log(quote);
//     console.log(`- ${author}`);
// });

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
        quote = data[0].q
        res.send({ quote });
        author = data[0].a
        console.log(`- ${quote}`);
        console.log(`-- ${author}\n`);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
