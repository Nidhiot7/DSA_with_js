
// Question 1
// function sayHi(){      
//     console.log(name);
//     console.log(age);
//     var name = "Lydia";
//     let age = 21;
// }
// sayHi();   // undefined

// Question 2
// for(var i=0; i<3, i++){
//     setTimeout(() => console.log(i), 1);
// }

//  Question 3
// let temp = {
//     a: 10,
//     b: 20,
//     sum() {
//         return this.a + this.b;
//     },
//     multi:() => {
//         return this.a * this.b;
//     },
// };
// console.log(temp.sum())
// console.log(temp.multi());  // 30 and NaN

//  Question 4
// console.log(+true);
// console.log(!"abc");  // 1 and false

//  Question 5
// const bird = {
//     size: "small",
// };
// const mouse = {
//     name: "Mickey",
//     small: true,
// };

// console.log(mouse[bird.size]);
// console.log(mouse[bird["size"]]);  // true and true

// Question 6
// let c = { greeting: "Hey!"};
// let d;
// d = c;
// c.greeting = "Hello";
// console.log(d.greeting); // Hello

// Question 7
// let a = 3;
// let b = new Number(3);

// console.log(a == b);
// console.log(a === b);  // true and false

// Question 8
// let greeting;
// greetign = {};
// console.log(greetign); // {}

// Question 9
// function sum(a, b){
//     return a + b;
// }
// sum(10, "2");

// Question 10
// console.log(typeof []); // object

// Question 11
// let x=0;
// console.log(x++); // 0

// Question 12
// console.log(eval("10*10+5")); // 105

// Question 14
// var num = 8;
// var num = 10;
// console.log(num); // 10

// Question 15
// const obj = 
// { a: "one", a: "two"};
// console.log(obj); // { a: "two"};

// Question 16
// for(let i = 1; i < 5; i++){
//     if(i === 3)constinue;
//     console.log(i);
// } // 1 2

// Question 17
// (() => 0)(); // 0

// Question 18
// console.log(typeof typeof 1); // string

// Question 19
// console.log(true === 1); // false

// Question 20
// let x = [..."Lydia"];
// console.log(x);  // ["L", "y", "d", "i", "a"];

// Question 21
// console.log(3 + 4 + "5"); // 75

// Question 22
// const obj = {
//     a: "one",
//     b: "two",
//     a: "three"
// };
// console.log(obj); // { a: "three", b: "two" }

// Question 23
// function getAge(...args){
//     console.log(typeof args);
// }
// getAge(21); // object

// Question 24
// let data = [10, 20, 30, 40, 50];
// let len = data.length;
// for(let i=0; i<len; i++){
//     if(i>=10){
//     console.log(data[i]);
// }
// }

// Question 
// let data = {
//     name: "Anil",
//     age:26,
//     city: "Noida",
// };
// console.log(data);

// Question 
// let data = "Hello Peter, How are you";
// data = data.substring(0, 11);
// console.log(data);

// Question 
// console.log(typeof NaN); // number

// let data = [4, 7, 1, 4, 9, 2, 4, 1];
// data.length = 5;
// console.log(data);

// let sum = data.reduce((x, y)=>x*y);
// console.log(sum);

// let unique = new Set(data);
// console.log([...unique]);  // this logic for a duplicate value 

// let x=10;
// y=40
// x=(y+=20, y);
// console.log(x, y);

// let x=20, y=30;
// [x, y]=[y, x];
// console.log(x, y);  // swapping the value number 30 and 20