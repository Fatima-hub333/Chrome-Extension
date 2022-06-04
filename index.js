// Practice
// const welcomeEl = document.getElementById("welcome-el");

// function greetUser(name, hello) {
//   welcomeEl.textContent = hello + " " + name + " 👋";
// }

// greetUser("Fatima", "Welcome Back");

// const welcomeEl = document.getElementById("welcome-el");

// function greetUser(greetings, name, emoji) {
//   welcomeEl.textContent = ` ${greetings}, ${name} ${emoji}`;
// }

// greetUser("Welcome Back", "Fatima Zahir", "🔥");

// Number as function parameters

// Create a function, add(), that adds two numbers together and returns the sum
// function add(num1, num2) {
//   return num1 + num2;
// }
// console.log(add(3, 4)) //should log 7
// console.log( add(9, 102)) //should log 111

// Arrays as parameters
// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(arr) {
  return arr[0];
}


// Call it with an array as an argument to verify that it works
let firstCard = getFirst([1, 2, 3, 4, 5])
console.log(firstCard)