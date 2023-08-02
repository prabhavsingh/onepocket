const fs = require('fs');

fs.readFile('./data.txt', 'utf-8', (err, data) => {
    if (err) return console.log(`Error: ${err}`);
    const words = data.split(' ');
    console.log(`Number of words in file data.txt is ${words.length}`);
})

