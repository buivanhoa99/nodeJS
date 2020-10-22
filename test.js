const fs = require('fs');

// directory path
const dir = './image/';

// list all files in the directory
var name = [];
fs.readdir(dir, (err, files) => {
    if (err) {
        throw err;
    }

    // files object contains all files names
    // log them on console
    files.forEach(file => {
        //console.log(file);
        name.push(file);
    });
    name =files;
    console.log("ABC"+name);
});

