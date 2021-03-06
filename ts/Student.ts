export class Student {
  private name: string;
  private avgGrade: number;
  private email: string;
  private age: number;

  constructor(name: string, avgGrade: number, email: string, age: number) {
    this.name = name;
    this.email = email;
    if (age > 0 && age < 100) this.age = age;
    else this.age = 20;
    if (avgGrade > 0 && avgGrade < 100) this.avgGrade = avgGrade;
    else this.avgGrade = 60;
  }

  get studentName(): string {
    return this.name;
  }

  set studentName(str: string) {
    this.studentName = str;
  }

  get avgGradeScore(): number {
    return this.avgGrade;
  }

  get emailName(): string {
    return this.email;
  }

  set avgGradeScore(num: number) {
    if (num > 0 && num < 100) this.avgGrade = num;
    else this.avgGrade = 70;
  }

  set emailName(str: string) {
    this.email = str;
  }

  get ageNum(): number {
    return this.age;
  }
  set ageNum(num: number) {
    if (num > 18 && num < 80) this.age = num;
    else this.age = 20;
  }

  print() {
    console.log(
      `name: ${this.name}, age: ${this.age},
      avgGrade: ${this.avgGrade}, email: ${this.email}`
    );
  }
}

let hadar: Student = new Student('hadar', 1000, 'hadar@walla.com', 22);
// hadar.print();
// hadar.ageNum = 60;
// hadar.avgGradeScore = 60;
// hadar.print();
