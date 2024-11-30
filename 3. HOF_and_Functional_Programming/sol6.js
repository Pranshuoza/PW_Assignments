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
  
function categorizeExpense(amount) {
    return amount > 100 ? "High Expense" : "Low Expense";
  }
  
  const categorizedExpenses = expenses.map(expense => ({
    ...expense,
    categoryLevel: categorizeExpense(expense.amount)
  }));
  
  console.log(categorizedExpenses);
  