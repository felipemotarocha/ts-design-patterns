interface Prototype {
  clone: () => Prototype;
}

class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address("Av Brasil", 15);

const person1 = new Person("Felipe", 20);
person1.addAddress(address1);

const person2 = person1.clone();

person1.addresses[0].street = "Bla bla bla";

person2.name = "Person2";

console.log(person2.addresses);
