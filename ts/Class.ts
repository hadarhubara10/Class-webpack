import { Teacher } from './Teacher';
import { Student } from './Student';
export class Class {
  private serialNam: number;
  private teacher: Teacher;
  private studentsArr: Student[];
  private maxStudents: number;
  constructor(
    serialNam: number,
    teacher: Teacher,
    studentsArr: Student[],
    maxStudents: number
  ) {
    this.studentsArr = studentsArr;
    this.teacher = teacher;

    if (maxStudents > 10 && maxStudents < 90) this.maxStudents = maxStudents;
    else this.maxStudents = 10;

    if (serialNam > 100 && serialNam < 400) this.serialNam = serialNam;
    else this.serialNam = 10;
  }
  // teacher
  get teacherName(): Teacher {
    return this.teacher;
  }

  set teacherName(str: Teacher) {
    this.teacher = str;
  }
  // studentsArr
  get students(): Student[] {
    return this.studentsArr;
  }

  set students(str: Student[]) {
    this.studentsArr = str;
  }
  // serialNum
  set serialNumClass(num: number) {
    if (num > 100 && num < 400) this.serialNam = num;
    else console.error('Serial Num Is low');
  }
  get serialNumClass(): number {
    return this.serialNam;
  }

  // maxStudents

  set maxStudentsNum(num: number) {
    if (num > 10 && num < 90) this.maxStudents = num;
  }

  get maxStudentsNum(): number {
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
