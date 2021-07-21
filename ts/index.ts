import { Class } from './Class';
import { Student } from './Student';
import { Teacher } from './Teacher';

let hadar: Student = new Student('hadar', 100, 'hadar@walla.com', 22);
let hila: Student = new Student('hila', 100, 'hila@walla.com', 20);
let abramov: Student = new Student('abramov', 90, 'abramov@walla.com', 22);

let eyal: Teacher = new Teacher('eyal', 'Programming');

let jhonBrice: Class = new Class(100, eyal, [hadar, hila, abramov], 30);
jhonBrice.printClassInfo();
