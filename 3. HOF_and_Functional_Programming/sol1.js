function calculateTotal(items) {
    let total = 0;
    items.forEach(item => {
      total += item.price;
    });
    return total;
  }
  
  const items = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Mobile Charger", price: 1500 },
    { name: "Laptop Charger", price: 10500 }
  ];
  console.log(`Total Order Amount: Rs.${calculateTotal(items)}`);
  