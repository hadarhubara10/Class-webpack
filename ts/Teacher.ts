type professional = 'Math' | 'Physics' | 'History' | 'Programming';
export class Teacher {
  private name: string;
  private subjectSpecialization: professional;
  constructor(name: string, subjectSpecialization: professional) {
    this.name = name;
    this.subjectSpecialization = subjectSpecialization;
  }

  get teacherName(): string {
    return this.name;
  }
  set teacherName(str: string) {
    this.name = str;
  }
  get subjectSpecializationName(): professional {
    return this.subjectSpecialization;
  }
  set subjectSpecializationName(str: professional) {
    this.subjectSpecialization = str;
  }

  print(): void {
    console.log(
      `name: ${this.name}, subjectSpecialization: ${this.subjectSpecialization}  `
    );
  }
}

let hubara: Teacher = new Teacher('hadar', 'Programming');
// hadar.subjectSpecializationName = ''
