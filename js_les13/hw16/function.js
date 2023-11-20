'use strict';

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
}

class car {
    constructor(brand, model, year, licensePlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;

        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log(`Владелец автомобиля ${this.brand} ${this.model} должен быть старше 18 лет.`);
        }
    }

    displayInfo() {
        console.log(`Автомобиль: ${this.brand} ${this.model}`);
        console.log(`Год выписки: ${this.year}`);
        console.log(`Номерний знак: ${this.licensePlate}`);

        if (this.owner) {
            console.log("Информация о владельце:");
            this.owner.displayInfo();
        }
    }
}

const person1 = new person("Саша", 23);
const person2 = new person("Юра", 50);

const car1 = new car("Toyota", "Camry", 2020, "BC1234", person1);
const car2 = new car("Mitsubishi", "Lancer", 2009, "AE0633", person2);

car1.displayInfo();
car2.displayInfo();