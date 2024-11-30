const originalNumbers = [2, 5, 8, 10, 3];
const evenNumbers = [];
originalNumbers.forEach(num => {
  if (num % 2 === 0) evenNumbers.push(num);
});

console.log(evenNumbers);
