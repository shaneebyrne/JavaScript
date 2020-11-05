//alert('Hello World!');
//console.log("hello world");
console.error('this is an error');
//var, let, const
//var is globally scoped
//issues when using var in conditions
let age =30;
console.log(age);

const name = "BOB";
//const requires initialization

console.log(name);

//Strings, numbers, boolean, null, undefined, Symbol

//semi-colons are not necessary, but recommended

const number =22;

const namen = "Bill";

const raiting = 4.5;

const isCool = true;

const x = null;  //empty

const y = undefined; //can be defined

let z;

console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof number);
console.log(typeof namen);

//concatination
console.log("My name is" + name + "and I am" + age); //old concatination method

//Template string/literal

const hello = `My name is${name} and I am ${age}`;
console.log(hello);

const s = 'Hello World!';
console.log(s.length);
console.log(s.toUpperCase()); //() needed to call methods

console.log(s.toLowerCase());

console.log(s.substring(0,5));

console.log(s.split('')); // space is delimiator for array

//Array = variable that holds multiple values

const one = new Array(1, 2, 3, 4, 5, 6);

console.log(one);

const fruits =['Apples', 'Bannanas', 'Pears', 'Oranges'];
console.log(fruits);

console.log(fruits[1]);

fruits[3] = 'Grapes'; //replaces 3rd array slot item

console.log(fruits);


fruits.push('mangos');

console.log(fruits);

fruits.unshift('strawberries');

console.log(fruits);

fruits.pop();

console.log(fruits);

console.log(Array.isArray(fruits)); //checks if object is an array

console.log(fruits.indexOf("Oranges"));

const person = {
    firstName : 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main St',
        city: 'Boston',
        State: 'MA'
    }

}

console.log(person);

console.log(person.hobbies[1]); //pulls index 1 out of hobbies array

console.log(person.address.city); //pulls out city variable

//console.log(person.)

/*
This should block out anything within these  things.
*/