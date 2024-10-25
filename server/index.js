const express = require("express");
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
let data = '';

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// EXAMPLE 
// let currentQuote = fetch('https://zenquotes.io/api/random')
//     .then((response) => response.text())
//     .catch(err => console.log(err))
// .then((body) => {
//     console.log(body);
// });

// Handle GET requests to /newQuote route
app.get("/newQuote", (req, res) => {
    res.send({ message: "API GET request made!!!" });
    fetch('https://zenquotes.io/api/random', {
         method: "GET",
         headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
    )
    .then((response) => displayText = response.json())
    .then((body) => {
        console.log(body);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
