//ask for example
function toClose() {
    close("https://www.w3schools.com");
   }


// write a program to accept user's name and age, display the result on the 
// browser telling them "welcome user's name, you are - years old"
let yourName = prompt("Enter your name");

    setTimeout(
        function(){
            prompt("Enter your age");
        },4000
    );
};
let age = collect();

prompt(`welcome ${yourName}, you are ${age} years old`)




// let yourName = prompt("Enter your name");
// function collect(){
//     setTimeout(
//         function(){
//             prompt("Enter your age");
//         },4000
//     );
// };
// let age = collect();

// prompt(`welcome ${yourName}, you are ${age} years old`)


// getElemenenstByClassName()
// Example 1:
const jesusChrist = document.getElementsByClassName("Jesus");
let savior = console.log(jesusChrist);

let named = savior.map(function(item){
    return item === "so";
    });
    console.log(named);

    // use for each when looping tru className or use queryselectorAll then for All


// since dom manipulations show only on browser tru document.body and not in files
// how do I view all my dom manipulations on one page?

// how do I place items into categories in js : done, check search box example

// console.log(localStorage.getItem("alabian")); how do i get each value in the key?
const many = JSON.parse(localStorage.getItem("family"))
{many.fullNAAme}