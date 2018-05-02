class Person
{
  constructor(name='Anonymous', age=0) {
    this.name = name;
    this.age  = age;
  }

  greet() {
    return `Howdy. I'm ${this.name}`;
  }
  
  getDesc() {
    return `Name: ${this.name} / Age: ${this.age}`;
  }
}

class Student extends Person
{
  constructor(name, age, major) {
    super(name, age);
    this.major = !!major;
  }

  getDesc() {
    return `I'm a STUDENT. Name: ${this.name} / Age: ${this.age}`;
  }

  hasMajor() {
    return !!this.major;
  }
}


const RobK = new Person('RobK', 48);
RobK.greet();
RobK.getDesc();

const JoeK = new Person('Joe Koleno', 16);
JoeK.greet();
JoeK.hasMajor();
JoeK.getDesc();