"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, avgGrade, email, age) {
        this.name = name;
        this.email = email;
        if (age > 0 && age < 100)
            this.age = age;
        else
            this.age = 20;
        if (avgGrade > 0 && avgGrade < 100)
            this.avgGrade = avgGrade;
        else
            this.avgGrade = 60;
    }
    get studentName() {
        return this.name;
    }
    set studentName(str) {
        this.studentName = str;
    }
    get avgGradeScore() {
        return this.avgGrade;
    }
    get emailName() {
        return this.email;
    }
    set avgGradeScore(num) {
        if (num > 0 && num < 100)
            this.avgGrade = num;
        else
            this.avgGrade = 70;
    }
    set emailName(str) {
        this.email = str;
    }
    get ageNum() {
        return this.age;
    }
    set ageNum(num) {
        if (num > 18 && num < 80)
            this.age = num;
        else
            this.age = 20;
    }
    print() {
        console.log(`name: ${this.name}, age: ${this.age},
      avgGrade: ${this.avgGrade}, email: ${this.email}`);
    }
}
exports.Student = Student;
let hadar = new Student('hadar', 1000, 'hadar@walla.com', 22);
// hadar.print();
// hadar.ageNum = 60;
// hadar.avgGradeScore = 60;
// hadar.print();
