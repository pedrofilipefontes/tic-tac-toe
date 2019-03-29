//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(process.env.PORT || port, () => {
    console.log(`Serving on ${port}`);
});
