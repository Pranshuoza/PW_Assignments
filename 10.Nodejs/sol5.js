const path = require('path');

const filePath = 'C:\Users\prans\Web_Developement\PW_skills_assignment\10.Nodejs\hello.txt';

console.log('Directory Name:', path.dirname(filePath));
console.log('Base Name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));

const newPath = path.join('/User', 'prans', 'projects', 'newFil.txt');
console.log('New Path:', newPath);
