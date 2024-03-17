class Student {
  constructor(firstName, lastName, age, attendancePercentage) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.attendancePercentage = attendancePercentage;
  }
  // instance Method
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName} and your age is ${this.age}`;
  }

  attendanceStatus() {
    if (this.attendancePercentage < 75) {
      return console.log(
        `${this.firstName} ${this.lastName} your attendance is ${this.attendancePercentage}% so you can't attend the exam`
      );
    }
    return console.log(
      `${this.firstName} ${this.lastName} your attendance is ${this.attendancePercentage}% so you can attend the exam`
    );
  }
  changeAttendance(num) {
    this.attendancePercentage = num;
  }
}

let firstStudent = new Student("Rio", "PA", 25, 74);
let secondStudent = new Student("Ruby", "BB", 25, 95);

console.log(secondStudent.fullName());

firstStudent.attendanceStatus();

firstStudent.changeAttendance(85);

firstStudent.attendanceStatus();