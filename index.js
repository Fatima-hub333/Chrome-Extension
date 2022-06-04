// Practice
// const welcomeEl = document.getElementById("welcome-el");

// function greetUser(name, hello) {
//   welcomeEl.textContent = hello + " " + name + " 👋";
// }

// greetUser("Fatima", "Welcome Back");

const welcomeEl = document.getElementById("welcome-el");

function greetUser(greetings, name, emoji) {
  welcomeEl.textContent = ` ${greetings}, ${name} ${emoji}`;
}

greetUser("Welcome Back", "Fatima Zahir", "🔥");
