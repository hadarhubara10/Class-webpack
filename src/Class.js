"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class = void 0;
class Class {
    constructor(serialNam, teacher, studentsArr, maxStudents) {
        this.studentsArr = studentsArr;
        this.teacher = teacher;
        if (maxStudents > 10 && maxStudents < 90)
            this.maxStudents = maxStudents;
        else
            this.maxStudents = 10;
        if (serialNam > 100 && serialNam < 400)
            this.serialNam = serialNam;
        else
            this.serialNam = 10;
    }
    // teacher
    get teacherName() {
        return this.teacher;
    }
    set teacherName(str) {
        this.teacher = str;
    }
    // studentsArr
    get students() {
        return this.studentsArr;
    }
    set students(str) {
        this.studentsArr = str;
    }
    // serialNum
    set serialNumClass(num) {
        if (num > 100 && num < 400)
            this.serialNam = num;
        else
            console.error('Serial Num Is low');
    }
    get serialNumClass() {
        return this.serialNam;
    }
    // maxStudents
    set maxStudentsNum(num) {
        if (num > 10 && num < 90)
            this.maxStudents = num;
    }
    get maxStudentsNum() {
        return this.maxStudents;
    }
    printClassInfo() {
        let numStudent = 0;
        console.group();
        console.log('Teacher:');
        this.teacher.print();
        this.studentsArr.forEach((element) => {
            console.log(numStudent);
            element.print();
            numStudent++;
        });
        console.log(this.serialNam);
        console.log(this.maxStudents);
        console.groupEnd();
    }
}
exports.Class = Class;
