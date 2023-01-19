const express = require('express');
const config = require('./config');

const app = require('express')();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));



