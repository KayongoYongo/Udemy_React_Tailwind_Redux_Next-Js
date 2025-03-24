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