class Employee {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this._lang = lang;
    }

    set salary(value) {
        this._salary = value;
    }

    get salary() {
        return this._salary*3;
    }
}
const programmer1 = new Programmer("Jack", 25, 3000, ["js", "php"]);
const programmer2 = new Programmer("Benjamin", 30, 2500, ["php"]);
const programmer3 = new Programmer("Daniel", 35, 3500, ["js", "java"]);

console.log(programmer1);
console.log(programmer1.salary);
programmer1.salary = 4000;
console.log(programmer1.salary);
console.log(programmer2);
console.log(programmer3);


