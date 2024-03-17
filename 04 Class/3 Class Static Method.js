class Student {
  constructor(firstName, lastName, age, attendancePercentage) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.attendancePercentage = attendancePercentage;
  }
  // static method
  static logNames(...students) {
    for (let i = 0; i < arguments.length; i++) {
      console.log(students[i].firstName, students[i].lastName);
    }
  }
}

let firstStudent = new Student("Rio", "PA", 25, 74);
let secondStudent = new Student("Ruby", "BB", 25, 95);

Student.logNames(firstStudent, secondStudent);