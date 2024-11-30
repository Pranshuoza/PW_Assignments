const expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" }
];
  
  const expensesWithTax = expenses.map(expense => ({
    ...expense,
    tax: expense.amount * 0.1
}));
  
console.log(expensesWithTax);
  
const groceries = expenses.filter(expense => expense.category === "Groceries");

console.log(groceries);
