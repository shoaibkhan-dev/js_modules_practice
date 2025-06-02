// export class Car {
//     constructor(color, model){
//         this.color = color;
//         this.model = model;
//     }
//     start(){
//         console.log(`I have ${this.color} colour ${this.model}`)
//     }
// }


// export function subtract (a, b){
//     return a - b
// }


export class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName (){
        console.log(`Hello my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`)
    }
}