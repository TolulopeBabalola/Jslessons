// // odd and even number determined
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let i = 0; i < arr.length; i++){
//    if(i % 2 === 0){
//     console.log(`${i} is even`);
//    } else {
//     console.log(`${i} is odd`);
//    } 
//   }

// while loop
// let i = 1; n = 5;
// while( i <=n ) {
//     console.log(i); 
//     i++;
// }
// note here that 5 is the upper limit, so iteration stops at 5
// i++ is the same as i+=1; if you do +=2; once the upper limit of 5 is reached, iteration stops


// for loop
// for(let a = 4; a < 10; a++){
// console.log(`values are ${a}`);
// }
// you have to initialize to use a for loop i.e a=sthng;


// for loop with break
// for(let a = 4; a < 10; a++){
//     if( a === 7 ){
//         break
//     }
// console.log(`values are ${a}`);
// }


// for loop with continue
// for (let x = 0; x < 8; x++){
//     if (x === 5){
//         alert("red");
//         continue;
//     }
//         console.log(` story na ${x}`);
// }


// for of: note that array is seen as an object here
// helps to loop tru each item of an array, charAt(0) helps to get the first index of each item in the array
// slice 1 helps to call out each item of the array
// const days = ["monday", "tues", "wed", "thurs"];
// for (const day of days){
//     var upperDay = day.charAt(0).toUpperCase() + day.slice(1);
//     console.log(upperDay);
// }
// for of does not take in a callback function


//  using Array and .length
// const colors = ["yellow", "green", "blue", "indigo", "violet"];
// for(let i = 0; i <= colors.length; i++ ){
//     console.log(`This is color ${colors[i]} and it's nice`);
// }
// so long as i = length-1, last value will always be undefined. so rather say
// for(let i = 0; i < colors.length which is always true then put your statement)

// Destructuring
// const music =["Tupac", "Bob Marley", "Fela", "Idibia", "Chioma Jesus"];
//       const[Rap, Raggae, Afro, rnb, Gospel] = music
//  or

// const [Rap, Raggae, Afro, rnb, Gospel] = ["Tupac", "Bob Marley", "Fela", "Idibia", "Chioma Jesus"];
//  console.log(Rap);

// How to skip value in an array
// note that the carrot, apple and p.apple were skipped and kuk was called out singlehandedly
// let [tomati, , , , kuku] = ["taomato", "carrot", "apple", "pineapple", "cuccumber"];
// console.log(kuku);

// Array Nesting
    //  let fruits = ["taomato", "carrot", "apple", ["pineapple", "cuccumber"]];
    //  console.log(fruits[3][1]);

// spread operator
// const music =["Tupac", "Bob Marley", "Fela", "Idibia", "Chioma Jesus"];
// console.log(...music);
// ans is Tupac Bob Marley Fela Idibia Chioma Jesus i.e each item in the array comes out individually
// which is a way of calling out each item in an array without using the for of which sees 
// array as an object and loops over it



// Rest parameter + destructuring
// const order= [20.30, 19, 1.30, "cheese", "eggs", "milk"];
// const[total, subtotal, tax, ...items] = order;
// console.log(total, subtotal, tax, items);


// Js FUnctions 
// functions are reusable elements hence prevents programmer from writng same codea again and again to get sthng done

// ES5 functions 
// function people (){
//    return(whatever);
//  }
// people(); 
// note that people(); is known as function invocation, functions won't work except they are invoked

// Example:
//  function people (a,b){     
//   return(a*b);
//  }
// people(3,5);  


// Example 2:
// function student (name, surname, matric){
// return (`My name is ${name} ${surname} with the matric no ${matric}`);
// }
// console.log(student("Jack", "Jill", "MET/11/4699"));
// console.log(student("Tolu", "Craig", "MET/11/0096"));
// console.log(student("Bayo", "Dims", "MET/11/9899"));


// Example 3:
// function convertTemp (cel) {
//     return (cel * 9/5) + 32
// }
// console.log(`My result is ${convertTemp(87)}`) ; 

// more clearly

// function convertTemp (cel) {
//     return (cel * 9/5) + 32
// }
// var result = convertTemp(87);
// console.log(`My result is ${result}`) ; 


// ES6 Arrow functions
// let person = (a,b) => {
// return (a*b);
// }
// person(1,2);

// single line of code es6 arrow function
// let person = (a,b,c) => (a*b*c);
// person(1,2,3);


// Function with Default parameter 
// Here there is no need to pass values during invocation as default parameters have been set

// function profile(name="Ernest", Job="Software Developer"){
//     return (`My name is ${name} and I am a ${Job}`)
// }
// profile();


// callback function is when an existing function is called/brought into a new function

// new key word: i.e constructor
// const primes = new Set([2,3,5,7,11,13,19]);
// console.log(...primes);


// Template literal on object
// const students = {
//     name: "Tolu",
//     school: "Alabian Solutions",
//     age: 20
// }
// let info = `${students.name} is a student of ${students.school} and is ${students.age} years old`;


// ForEach ()
// The forEach method takes in a callback funtion, it loops tru each element in an array 
// const church = ["rccg", "mfm", "cac", "dpl"];
// const churchExists = church.forEach(function(arrValue, i, church){
//  console.log(arrValue, i, church);
// })
// note that forEach can take up to 3 arguments i.e each arrValue, index(i) and arrayName (church).
// it is a common  practice to rperesent arrValue with the word item or value(for  figures) hence you have
// church.forEach(function(item, i, church){
// console.log(item, i, church)
// })

// ES6 forEach
// const church = ["rccg", "mfm", "cac", "dpl"];
// const churchExists = church.forEach((item) => {
//  console.log(item);
// })



// Js Methods :
// remember that mthds are functions written in an object, also remember that typeOf(array) is object.

// sort()
// to sort values from the lowest to the highest, you have to first write a function to define lower and upper values a,b
// you can do b-a too i.e higest to lowest, note that that is not the same as reverse
// const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1];
// function ascendingComp(a, b){
//     return (a-b);
//   }
//   numbers.sort(ascendingComp);


// Looping tru an array

// find () - find mthd is used to find an element in an array then u return the item
// The find method takes in a callback funtion and returns undefined if not found
// note that find can take up to 3 arguments i.e each arrValue, index(i) and arrayName (studentsNames).

// find the name bayo in the array
//  const studentsNames = ["Jide", "Doyin", "Bayo", "Love", "Adamu"];
//     const nameFind = studentsNames.find(findBayo);

//     function findBayo(item){
//         return item === "Bayo";
//         }
//     console.log(nameFind);

// or

// const studentsNames = ["Jide", "Doyin", "Bayo", "Love", "Adamu"];
// const nameFind = studentsNames.find(function(item){
//     return item === "Tolu";
// })
// console.log(nameFind);  
// This returns undefined bcos Tolu is not Adamu
// This is an anonymous function


// in the case of an object
// find the name Gab
// const persons = [
//     {
//         name: "Goodness",
//         age:13
//      },
//      {
//         name: "Jamiu",
//         age:18
//      },
//      {
//         name: "Gab",
//         age:24
//      }
// ] 


// function findGab(person){
//     return person.name === "Gab";
//     }

// const bio = persons.find(findGab);
//  console.log(bio);
// // remember person stands for each array value


// or 

// const bio = persons.find(function(person, i, arr){
//     return person.name === "Gab";
// })
// console.log(bio);


// find the age of Gab
// const persons = [
//     {
//         name: "Goodness",
//         age:13
//      },
//      {
//         name: "Jamiu",
//         age:18
//      },
//      {
//         name: "Gab",
//         age:24
//      }
// ] 

// function findGab(person){
//     return person.name === "Gab";
//     }
// const bio = persons.find(findGab).age;
//  console.log(bio);



// filter () method
// helps to filter an array and returns whatever vlaue/item is required but it displays all the properties of that items
// const numbers = [-3, -2, -1, 0, 1, 2, 3];

// const filtered = numbers.filter(helpFilter);

// function helpFilter(number){
//     return number>0;
// }
// console.log(filtered);


// or
//  const numbers = [-3, -2, -1, 0, 1, 2, 3];

// const filtered = numbers.filter(function(number){
//     return number > 0;
// });

// console.log(filtered);



// Es6 filter method for one line of code

// const numbers = [-3, -2, -1, 0, 1, 2, 3];

// const filtered = numbers.filter(number => number >=0 );
// console.log(filtered);


// map () method
// helps to find properties of an object such that one can display some properties and not all properties of an array value
// i.e I can map and call out schhol based on location and price only and not every property
// const schoolData = [
//     {
//         name: "Alabian",
//         location: "Nigeria",
//         course_Taught: "Coding",
//         duration: "3 months",
//         price: 100.00
//     },
//     {
//         name: "w3schools",
//         location: "USA",
//         course_Taught: "Programs",
//         duration: "self paced",
//         price: 0.00
//     },
//     {
//         name: "freecodecamp",
//         location: "Uk",
//         course_Taught: "Programming",
//         duration: "3 months",
//         price: 1.00
//     },
//     {
//         name: "Tbabs",
//         location: "Uk",
//         course_Taught: "Prog",
//         duration: "3 months",
//         price: 10.00
//     }
// ]

// const getPrice = schoolData.map(function(school, index){
//     if(school.price <= 10.00){
//         return index + ": " + ` $ ${school.price}`;
//     }else{
//         return "higher price!";
//     }
// })
// console.log(getPrice);

// if you want to display index alongside
// const getPrice = schoolData.map(function(school, index){
//     if(school.price <= 10.00){
//         return index + ": " +  "$" + ${school.price};
//     }else{
//         return "higher price!";
//     }
// })
// console.log(getPrice);


// Get only the first name of each academic
// const academies = [
//         {
//             name: "Tolulope Babalola",
//             location: "Nigeria",
//             course_Taught: "Coding",
//             duration: "3 months",
//             price: 100.00
//         },
//         {
//             name: "Moses Opeyemi",
//             location: "USA",
//             course_Taught: "Programs",
//             duration: "self paced",
//             price: 0.00
//         },
//         {
//             name: "Moses Craig",
//             location: "Uk",
//             course_Taught: "Programming",
//             duration: "3 months",
//             price: 1.00
//         },
//         {
//             name: "Cranfield Jones",
//             location: "Uk",
//             course_Taught: "Prog",
//             duration: "3 months",
//             price: 10.00
//         }
//     ]

// const firstName = academies.map(function(acad){
// return acad.name.split(" ")[0];
// })
// console.log(firstName);

// return acad.name.split(" ")  hepls to split names into two words 'Tolulope', 'Babalola' instead of one;
// [0] gives us the first word which is the same as the first name


//  reduce method https://www.youtube.com/watch?v=g1C40tDP0Bk

// Ternary operator
// let age = 18; myage =14;
// myage >= age ? console.log("you fit kiss") : console.log("no kiss!")
// Example 2:
// Using ternary operator, write a program to determine whether a student passed or failed

// let pass = 50; let grade = 67;
// grade >= `${pass}` ? console.log("Congrstulations! You passed") : console.log("please resit!")


// switch statement

// function declareAge(myAge) {
//     let age = 18; 
//     switch(age) {
//         case 1:
//             age = "welcome to club!";
//             break;
//         case 2:
//          age > myAge = "No clubbing!";
//         break;
//        case 3:
//         age < myAge === "Happy clubbing"
//         default:
//             alert("enter your age!");
//             break;
//     }
// }
// declareAge(12);


// function tellDay(dayInput){
//     const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     for(day of weekDays){
//         if (dayInput === weekDays[0]) {
//             return "It's Sunday!";
//         } else if (dayInput === weekDays[1]) {
//             return "It's a Monday, alarm wake me at 7am";
//         } else if (dayInput === weekDays[2]) {
//             return "It's a Tuesday, alarm wake me at 4am";
//         } else if (dayInput === weekDays[3]) {
//             return "It's a Wednesday";
//         } else if (dayInput === weekDays[4]) {
//             return "It's a Thursday, alarm wake me at 9am";
//         } else if (dayInput === weekDays[5]) {
//             return "It's a Friday";
//         } else {
//             return "It's Saturday! alarm wake me at 11am";
//         }
//     }
// }
// tellDay("Thursday");

// switch statement
// used instead of else if statement. The way it works is that you have to first initialize a variable which will 
// be used to used for invocation, use the variable as the starting point then build your case. Note that you can't use the return keyword
// As in the example above:

// let day = "Sunday";
// switch (day) {
//     case "Sunday":
//         console.log("It's Sunday");
//         break;
//         case "Monday":
//         console.log("It's 7am on Monday, wake up! ");
//         break;
//         case "Tuesday":
//         console.log("It's 8am Tuesday, wake up!");
//         break;
//         case "Wednesday":
//         case "Thursday":
//         console.log("It 9am day, Gbera!");
//         break;
//         case "Friday":    
//         console.log("TGIF");
//         break;
//         default:
//         console.log("No Alarm Set!");
// }

// prompt in JavaScript
// prompts the use to input an answer or carry out an action e.g click yes or no, 
// Example 1:  
// const inputAnser = prompt("What did you score in Jamb!");

// Example 2:
// let A="Distinction"; 
// B="Very-Good "; 
// C="Good"; 
// D="Pass";
//  F="Fail";
// let jambScore = prompt("Enter your Jamb score");

// if (jambScore >=70 && jambScore <=100){
//     alert(`Your have grade A = ${A}`)
// } else if (jambScore >=60 && jambScore <=69) {
//     alert(`Your have grade B = ${B}`)
// } else if (jambScore >=50 && jambScore <=59) {
//     alert(`Your have grade C = ${C}`)
// } else if (jambScore >=40 && jambScore <=49) {
//     alert(`Your have grade D = ${D}`);
// }else {
//     alert(`Your have grade F = ${F}`);
//     }

// JS Classes
// To define a class put the keyword 'class' and the name of the class wihich starts with capital letter
// followed by the constructor () method
// Note: constructor() holds variables and the variables are fecthed using the 'this' keyword
// Example 1:
// class Car {
//     constructor(name, color, model){
//         this.name = name;
//         this.color = color;
//         this.model = model;
//     }
// }
// let myCar1 = new Car("Toyota", "blue");
// let myCar2 = new Car("Bentley", "yellow", 2019);
// let myCar3 = new Car("Lambo", "red", 2023);
// console.log(myCar1, myCar2, myCar3);  

// class method 
// class method is almost like a call back function in behavior, it commonly make reference to 
// JavaScript Date constructor i.e getDate(), getDay(), getFUllYear(), getHour() etc.
// Example:
// create a class method that will return the Car age: 

// class Car {
//     constructor(name, productionyear) {
//         this.name = name;
//         this.productionyear = productionyear;
//     }

//     age() {
//         let date = new Date();
//         return date.getFullYear() - this.productionyear;
//     }
//     mymethod(){
//       when you grow up you can write your own method too
//     }
// }
// let myCar = new Car("Lexus", 2018);
// console.log(myCar.age());

// class inheritance
// A situation where a class inherits all the methods from another class by the help of the "extends" keyword 

// Example:
// // Create a class named "Student" which will inherit the methods from the "person class"
// class Person {
//     constructor (name, prefect) {
//         this.name = name;
//         this.prefect = prefect;
//     }

//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
//     office(){
//         console.log(`${this.name} is our new ${this.prefect}`);
//     }
// }

// // students will inherit every method of the parent Class
// class Student extends Person {

// }

// // create an instance of students
// const myStudent1 = new Student("Bayo", "Head Boy");
// const myStudent2 = new Student("Tolu", "Head Girl");
// console.log(myStudent1.greet(),myStudent1.office());
// console.log(myStudent2.greet(),myStudent2.office());

// JS Objects
// const eyan = {
//     name: "Alabi",
//     age:18,
//     matric: 1827930,
//     exam(){
//         console.log("I passed");
//     }
// }

// eyan.exam();

// also take note of this keyword in this example
// const tolu = {
//     surname: "Babalola",
//     age: 30,
//     habit: function () {
//         console.log('The surname is' + ' ' + this.surname + ' ' + 'she can greet for Africa');
//     }
// };
// tolu.habit();


// calling properties of an array of objects
// using delete keyword on an object
// const availableCars = [
//     {
//         carName: "Mitsubishi",
//         year: 2009,
//         quantity: 10

//     }
// ]

// // availableCars[0].carName;
// delete availableCars.quantity;

// Object Destructuring
// const person = {
//     myName: "John Doe",
//     country: "canada"
// };

// const {myName, country} = person;
// console.log(`I am ${myName} from ${country}`);