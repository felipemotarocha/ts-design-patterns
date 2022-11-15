const personPrototype = {
  firstName: "Felipe",
  lastName: "Rocha",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = "OIE";
}

SubPerson.prototype = Object.create(Person.prototype);

const person2 = new SubPerson("Felipe", "Rocha", 20);
console.log(person2.fullName());

const person1 = new Person("Felipe", "Rocha", 20);
console.log(person1.fullName());
