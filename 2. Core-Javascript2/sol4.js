const person1 = { name: 'A', age: 25 };
const person2 = { name: 'B', age: 30 };

function introduce() {
  console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}
 
introduce.call(person2); 
