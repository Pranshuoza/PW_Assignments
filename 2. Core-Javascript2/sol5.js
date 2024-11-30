const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
const numberSquares = new Map();

uniqueNumbers.forEach((num) => {
  numberSquares.set(num, num * num);
});

console.log('Unique Numbers:', [...uniqueNumbers]);
console.log('Number Squares:', [...numberSquares]); 
