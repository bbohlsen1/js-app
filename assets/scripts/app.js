//import { apiKey } from "./util.js";


//import apiKey from "./util.js";

import { apiKey, abc as content } from "./util.js"

//import * as util from "./util.js";

//console.log(apiKey);
console.log();

function combine(Number = a, Nubmer = b, Number = c) {
    a * b / c;
}

console.log(combine(2, 3, 5));


//Arrow function syntax
(username, bean) => {
    return username / bean * 3;
}

username => {
    return username + 5;
}

number => number * 3;

number => ({age: number});




// const user = {
//     name: 'Max',
//     age: 34,
//     greet() {
//         console.log("Hello!");
//         console.log(this.age);
//     }
// };

//access name field
console.log(user.name);

//access method within const
user.greet();

//class
class User {
    //store parameters
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi!");
    }
}

const user1 = new User("Bob", 35);
console.log(user1);
user1.greet();

//array
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

hobbies.findIndex((item) => {
    return item === "Sports";
})

//Will return 0, the first value
console.log(index);

//Will add an exclamation point to the end of every value
//Very important
//const editedHobbies = hobbies.map((item) => item + "!");
//console.log(editedHobbies);

//will give text: "Sports"
const editedHobbies = hobbies.map((item) => ({text: item}));
console.log(editedHobbies);

//maps first element to first value and so on
const [firstName, lastName] = ["Bob", "Billions"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

console.log(firstName);
console.log(lastName);

const {name: userName, age} = {
    name: "Max",
    age: 34
};

console.log(userName);
console.log(age);

// const name = user.name;
// const age = user.age;
