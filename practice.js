let box = document.getElementById("box");
box.addEventListener("click", function () {
  console.log("I want to open the box")
});

let closeBox = document.getElementById("closeBox");
closeBox.addEventListener("click", function () {
  console.log("I want to close the box");
});

// let & const variable types practice
// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);

// Lear innerHTML
//  Use .innerHTML to render a Buy! button inside the div container
const container = document.getElementById("container");
container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
function buy() {
  container.innerHTML += "<p>Thank you for buying</p>";
}

// template strings/literals practice
const recipient = "James";
const sender = "Fatima";
// Refactor the email string to use template strings
//const email = "Hey " + recipient + "! How is it going? cheers Fatima ";
const email = `Hey ${recipient}! 
How is it going?
Cheers ${sender}`
console.log(email);

// LocalStorage Practice
// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads);
// 2. Push a new value to the array
myLeads.push("www.lead2.com");
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads);
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads);

// Truthy & Falsy Values Practice
const credits = 0;
if (credits > 0) {
  console.log("Let's play 🎰")
} else {
  console.log("Sorry, you have no credits 😭");
}