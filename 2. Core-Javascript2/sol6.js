function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
  }
   
  displayInfo.call(null, 'A', 'Developer');
   
  displayInfo.apply(null, ['B', 'Designer']);
   
  function greet() {
    console.log(`Hello from ${this.name}`);
  }
  
  const context = { name: 'C' };
  const boundGreet = greet.bind(context);
  boundGreet(); 
  