'use strict';

function Human(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Apartment() {
    this.residents = [];
}

Apartment.prototype.addResident = function (resident) {
    this.residents.push(resident);
}

function House(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
}

House.prototype.addApartment = function (apartment) {
    if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
    } else {
        console.log("Максимальное количество квартир в доме уже достигнуто.");
    }
}

let person1 = new Human(`Назар`, `Мужчина`);
let person2 = new Human(`Марина`, `Женщина`);
let person3 = new Human(`Петр`, `Мужчина`);
let person4 = new Human(`Александр`, `Мужчина`);

let apartment1 = new Apartment();
let apartment2 = new Apartment();

apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);
apartment2.addResident(person4);

let house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);

console.log(house);