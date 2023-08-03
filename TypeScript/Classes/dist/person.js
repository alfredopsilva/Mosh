"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() { return `${this.firstName} ${this.lastName}`; }
    walk() { console.log("Walking..."); }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() { console.log("Taking a test "); }
}
class Teacher extends Person {
    get fullName() { return `Professor ${super.fullName}`; }
}
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
printNames([
    new Student(1, 'Alfredo', 'Silva'),
    new Teacher('Mosh', 'Hamadani')
]);
//# sourceMappingURL=person.js.map