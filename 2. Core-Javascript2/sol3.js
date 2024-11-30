const contacts = new Map();
contacts.set('A', { age: 25, email: 'a@example.com', location: 'New York' });
contacts.set('B', { age: 30, email: 'b@example.com', location: 'San Francisco' });

function getContactDetails(name) {
  return contacts.get(name) || 'Contact not found';
}
 
console.log(getContactDetails('A')); 
