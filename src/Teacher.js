"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    constructor(name, subjectSpecialization) {
        this.name = name;
        this.subjectSpecialization = subjectSpecialization;
    }
    get teacherName() {
        return this.name;
    }
    set teacherName(str) {
        this.name = str;
    }
    get subjectSpecializationName() {
        return this.subjectSpecialization;
    }
    set subjectSpecializationName(str) {
        this.subjectSpecialization = str;
    }
    print() {
        console.log(`name: ${this.name}, subjectSpecialization: ${this.subjectSpecialization}  `);
    }
}
exports.Teacher = Teacher;
let hubara = new Teacher('hadar', 'Programming');
// hadar.subjectSpecializationName = ''
