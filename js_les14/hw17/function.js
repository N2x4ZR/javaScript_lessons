'use strict';

class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
      this.attendance = new Array(25).fill(null); // Массив посещаемости, длиной 25, изначально заполненный null
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
        return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    estimate(grade) {
        if (grade >= 0 && grade <= 100) {
        this.grades.push(grade);
        console.log(`${this.firstName} ${this.lastName} получил оценку ${grade}`);
        } else {
        console.log("Оценка должна быть в диапазоне от 0 до 100");
        }
    }

    present() {
        this.updateAttendance(true);
        console.log(`${this.firstName} ${this.lastName} присутствовал на занятии`);
    }

    absent() {
        this.updateAttendance(false);
        console.log(`${this.firstName} ${this.lastName} отсутствовал на занятии`);
    }

    updateAttendance(isPresent) {
        const emptySlotIndex = this.attendance.indexOf(null);
        if (emptySlotIndex !== -1) {
        this.attendance[emptySlotIndex] = isPresent;
        } else {
            console.log("Невозможно добавить запись в посещаемость, массив полностью заполнен");
        }
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendanceRatio = this.attendance.filter(Boolean).length / this.attendance.length;
        if (averageGrade > 90 && attendanceRatio > 0.9) {
            return "Молодец!";
            } else if (averageGrade > 90 || attendanceRatio > 0.9) {
            return "Хорошо, но можно лучше";
            } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Иван", "Иванов", 2000);
const student2 = new Student("Петр", "Петров", 1999);
const student3 = new Student("Мария", "Сидорова", 2001);

student1.estimate(95);
student1.present();
student1.estimate(85);
student1.absent();
student1.present();
student1.estimate(92);

student2.estimate(88);
student2.present();
student2.present();
student2.absent();
student2.estimate(78);

student3.estimate(91);
student3.present();
student3.present();
student3.present();
student3.absent();
student3.estimate(89);

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());
