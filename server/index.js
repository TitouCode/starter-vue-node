const express = require('express');
const cors = require('cors');

const app = express();
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(cors());

app.listen(4000);
console.log('Running API at localhost:4000');

// Faker --> TODO make a command to execute only once
// const Faker = require('@components/faker/Faker.js');
// const faker = new Faker();
// faker.generatePost();
// faker.generateTodos();

const Extractor = require('@components/extractor/Extractor.js');
const extractor = new Extractor();
const json = extractor.getDataFromFile();
console.log(json);
