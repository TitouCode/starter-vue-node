const fs = require('fs');
const path = require('path');

class Extractor {

    /**
     * Read File and get data as Json
     * @param {string} file Path/Name of the file to get data from
     */
    getDataFromFile (file = './data/posts.json') {
        const data = fs.readFileSync(file);
        return JSON.parse(data);
    }
}

module.exports = Extractor;