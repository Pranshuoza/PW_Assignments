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
  
const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

console.log(`Total Expenses: $${totalExpenses}`);
