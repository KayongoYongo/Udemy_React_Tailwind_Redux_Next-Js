// import { apiKey } from "./util";
//import abc from "./util";
//import { apiKey,abc,ghi } from "./util";
//import * as util from "./util";

//console.log(util.apiKey)

// Old way of writing a function
function greet () {
    console.log("Hello")
}
// The above function is defined but not executed.
greet();

// Adding parameters
function greetUser(username, message) {
    console.log("Hello" + " " + username + " " + message);
}

// Samuel and whats' up are arguments
greetUser("Samuel", "What's up?");

// Storing a function in a variable
const sayGoodbye = function(name) {
    console.log("Goodbye "+ name);
}

sayGoodbye("Samuel");

// Arrow functions
export default (userName, message) => {
    console.log('Goodnight');
    return userName + message;
}

// Arrow functions
const add = (a, b) => a + b;

console.log(add(5,6));

// Objects in Js

const person = {
    firstName: "John",
    secondName: "Doe",
    age: 30,
    fullname: function() {
        return "Hello my name is " + this.firstName + " " + this.secondName + "." + " I am "+ this.age + " years.";
    }
}

// Elements of an object can be accessed through dot notation
console.log(person.fullname());

const human = new Object();
human.firstName = "Jane";
human.lastName = "Doe";
human.age = 25;
human.fullName = function() {
  return this.firstName + " " + this.lastName;
};

console.log(human.fullName()); // Output: Jane Doe

// Getters and setters
class Student { 
    constructor(name, age) { 
      this._name = name; 
      this._age = age; 
    } 
   
    get name() { 
      return this._name; 
    } 
    set name(newName) { 
      this._name = newName; 
    }
  } 

   
  const student = new Student("Emma", 22); 
  console.log(student.name); // Output: Emma 
  student.name = "Olivia"; 
  console.log(student.name); // Output: Olivia