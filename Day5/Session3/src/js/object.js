

console.log('--- object creation & iteration ---');

// 1) Object literal + method + nested object
const person = {
  name: 'Jagruti',
  age: 30,
  contact: {
    email: 'jagruti@example.com',
    phone: '123-456'
  },
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};
console.log(person.greet());
console.log('person.contact.city (undefined):', person.contact.city);

// 2) Add and delete properties
person.address = 'Mumbai';
console.log('address added:', person.address);
delete person.age;
console.log('age deleted ->', person.age);

// 3) Dynamic / computed property access

const key = 'contact';
console.log('computed access:', person[key].email);

// 4) Iterate properties (only own properties)

console.log('--- for...in (with hasOwnProperty) ---');
for (const k in person) {
  if (Object.prototype.hasOwnProperty.call(person, k)) {
    console.log(k, ':', person[k]);
  }
}

// 5) Using Object.keys, Object.values, Object.entries

console.log('Object.keys:', Object.keys(person));
console.log('Object.values:', Object.values(person));
console.log('Object.entries:');
for (const [k, v] of Object.entries(person)) {
  console.log(k, '=>', v);
}

// 6) Constructor function + prototype

function User(name, role) {
  this.name = name;
  this.role = role;
}
User.prototype.describe = function() {
  return `${this.name} is a ${this.role}`;
};
const u = new User('Bob', 'developer');
console.log(u.describe());

// 7) ES6 class

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  info() {
    return `${this.make} ${this.model}`;
  }
}
const car = new Car('Toyota', 'Corolla');
console.log(car.info());

// 8) Object cloning and merging (spread)

const clone = { ...person };
console.log('clone has same keys:', Object.keys(clone));

// 9) Freeze / seal

const frozen = Object.freeze({ a: 1 });
try {
  frozen.a = 2; // fails silently or throws in strict mode
} catch (e) {
  console.log('cannot modify frozen object');
}
console.log('frozen.a:', frozen.a);

// 10) JSON serialization
const json = JSON.stringify(person);
console.log('JSON string:', json);
console.log('parse back:', JSON.parse(json));

// 11) Inherited properties demo
const proto = { inheritedProp: 'yes' };
const child = Object.create(proto);
child.ownProp = 'mine';
console.log('for...in (shows inherited):');
for (const p in child) {
  console.log(p, child[p]); // includes inheritedProp
}
console.log('Object.keys(child) only own props:', Object.keys(child));
