// User constructor
function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.login = function() {
  console.log(this.name + " logged in");
};

// Student constructor
function Student(name, email, rollNo) {
  User.call(this, name, email); 
  this.rollNo = rollNo;
}

Student.prototype = Object.create(User.prototype); // inherit User prototype
Student.prototype.constructor = Student;

Student.prototype.registerEvent = function() {
  console.log(this.name + " registered for event");
};


function Organizer(name, email, department) {
  User.call(this, name, email); // call User constructor
  this.department = department;
}

Organizer.prototype = Object.create(User.prototype); 
Organizer.prototype.constructor = Organizer;

Organizer.prototype.createEvent = function() {
  console.log(this.name + " created an event");
};
