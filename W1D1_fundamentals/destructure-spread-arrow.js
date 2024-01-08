// // destructuring
// const person = {
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     createdAt: 1543945177623,
//     firstName: 'Bob',
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const b = animals[1]; // 'dog'
// const c = animals[2]; // 'fish'

// const [, , e, , z] = animals;
// console.log(e, z); // ?


// const { password: hash, lastName, firstName } = person;
// console.log(firstName, hash, lastName);

// let state = "some value";

// const firstFunction = function () {
//     console.log(state);
//     return state;
// };
// const secondFunction = function (newStateValue) {
//     console.log("new value: " + newStateValue);
//     state = newStateValue;
//     // return 0
// };

// const useState = [firstFunction, secondFunction];

// const [, secondFunct] = useState;
// const response = secondFunct(5);
// console.log("response is ", response);

// // console.log(console.log("hello"));

// const person1 = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//         {
//             address: '1600 Pennsylvania Avenue',
//             city: 'Washington, D.C.',
//             zipcode: '20500',
//         },
//         {
//             address: '221B Baker St.',
//             city: 'London',
//             zipcode: 'WC2N 5DU',
//         }
//     ],
//     createdAt: 1543945177623
// };

// const person2 = { ...person1 };
// person1.firstName = "bob2";
// person2.firstName = "alice";
// console.log(person1, person2);

// const { addresses: [{ address: whitehouseAddress }] } = person1;
// console.log(whitehouseAddress);

// -------------------------

// const a = [10, 20, 30];
// const b = [...a];

// a.push(1000);
// b.push(5000);

// console.log(a); // ?
// console.log(b); // ?

// -----------------

// arrow functions
function hello(someName) {
    return "hello " + someName;
}

const hello2 = function (someName) {
    return "hello " + someName;
};

// convert to arrow
const arrowHello = (someName) => {
    return "hello " + someName;
};

function multiply(a, b) {
    return a * b;
}

const arrowMultiply = (a, b) => a * b;


console.log(

    hello2("alice")
);

// -------------------
// ternary - 3 operants -  base 3
const age = 20;
if (age >= 21) {
    console.log("you may pass!");
} else {
    console.log("you need more xp");
}

age >= 21 ? <p>"you may pass!"</p> : <p>"you need more xp"</p>;


document.getElementById("hover-this").onmouseout = () => {
    setBackgroundColorById("body", "white");
};

const getValueFromId = (id) => {
    return document.getElementById(id).value;
};