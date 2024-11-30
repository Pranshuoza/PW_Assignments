const calculator = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    calculate(operation, a, b) {
      return this[operation](a, b);
    }
  };
   
  console.log(calculator.calculate.call(calculator, 'add', 5, 10)); // Output: 15
   
  console.log(calculator.calculate.apply(calculator, ['multiply', 4, 5])); // Output: 20
   
  const discountCalculator = {
    discountPercentage: 10,
    applyDiscount(price) {
      return price - (price * this.discountPercentage) / 100;
    }
  };
   
  const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
  console.log(calculateDiscount(100));  
  