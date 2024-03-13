const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);
});

app.get('/index.js', (req, res) => {
    console.log("index js request")
    const htmlContent = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');
    console.log(htmlContent)
    res.setHeader('Content-Type', 'text/javascript');
    res.send(htmlContent);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});