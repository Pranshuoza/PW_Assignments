function sumOfNumbers(n) {
    let sum = 0;
    let i = 1;
    do {
      sum += i;
      i++;
    } while (i <= n);
    console.log(`Sum of numbers from 1 to ${n} is: ${sum}`);
}

  sumOfNumbers(5);  
  sumOfNumbers(10);  
  