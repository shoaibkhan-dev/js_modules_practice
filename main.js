// class Person {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`hello my name is ${this.name} and i am ${this.age} years old`)
//     }
// }

// let person1 = new Person("shoaib", 23)
// let person2 = new Person("Ali", 25)


// console.log(person1.greet())

// import { Car } from "./math.js";
// let car1 = new Car("silver", "Honda")
// let car2 = new Car("black", "Buggatti")

// console.log(car2.start())


// Set: Unique logged-in users (user IDs)
const loggedInUsers = new Set();

// Map: User info with user ID as key
const userInfo = new Map();

// Function to simulate user login
function loginUser(id, name, email) {
  if (!loggedInUsers.has(id)) {
    loggedInUsers.add(id);
    userInfo.set(id, { name, email});
    console.log(`${name} logged in successfully ✅`);
  } else {
    console.log(`${name} is already logged in! ⚠️`);
  }
}

// Function to show all currently logged-in users
function showLoggedInUsers() {
  console.log("\n🧑‍💻 Currently Logged-in Users:");
  loggedInUsers.forEach((id) => {
    const user = userInfo.get(id);
    console.log(`- ${user.name} (${user.email})`);
  });
}

// Function to log out a user
function logoutUser(id) {
  if (loggedInUsers.has(id)) {
    const user = userInfo.get(id);
    loggedInUsers.delete(id);
    console.log(`${user.name} logged out 📴`);
  } else {
    console.log(`User ID ${id} is not logged in ❌`);
  }
}

// Simulate some users logging in
loginUser(1, "Shoaib", "shoaib@example.com");
loginUser(2, "Ali", "ali@example.com");
loginUser(3, "Usman", "usman@example.com");
loginUser(2, "Ali", "ali@example.com"); // Duplicate login

showLoggedInUsers();

// Logging out a user
logoutUser(2);
logoutUser(4); // Invalid logout

showLoggedInUsers();


import { subtract } from "./math.js";
console.log(78 - 34)


import { Person } from "./math.js";
let person1 = new Person("shoaib", "khan", 23);
let person2 = new Person("Ahmad", "shah", 18)

console.log(person1.fullName())
console.log(person2.fullName())