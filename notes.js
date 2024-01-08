const fs = require('fs');

const getNotes = function (notes){
    return fs.readFileSync(notes, {encoding: 'UTF-8'});
}

module.exports = getNotes;