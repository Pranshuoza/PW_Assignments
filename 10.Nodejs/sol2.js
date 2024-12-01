const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    fs.writeFile('destination.txt', data, (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('Content written to destination.txt');
    });
});
