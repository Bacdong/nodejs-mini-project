const express = require('express');
const app = express();
const port = 3000;

// route
app.get('/', (req, res) => res.send('Getting Started! Learning NodeJS!')); // use arrow function

// Use decration function
// app.get('/', function (req, res) {
//     return res.send('Hello World!');
// });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));