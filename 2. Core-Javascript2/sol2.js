const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);
 
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
 
const middleIndex = Math.floor(ages.length / 2);
const median = ages.length % 2 === 0 
  ? (ages[middleIndex - 1] + ages[middleIndex]) / 2 
  : ages[middleIndex];
 
const average = ages.reduce((sum, age) => sum + age, 0) / ages.length;
 
const range = maxAge - minAge;
 
const minAvgDiff = Math.abs(minAge - average);
const maxAvgDiff = Math.abs(maxAge - average);

console.log({
  minAge,
  maxAge,
  median,
  average,
  range,
  minAvgDiff,
  maxAvgDiff
}); 
