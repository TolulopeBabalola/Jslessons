//ask for example
function toClose() {
    close("https://www.w3schools.com");
   }


// write a program to accept user's name and age, display the result on the 
// browser telling them "welcome user's name, you are - years old"
let yourName = prompt("Enter your name");
function collect(){
    setTimeout(
        function(){
            prompt("Enter your age");
        },4000
    );
};
let age = collect();

prompt(`welcome ${yourName}, you are ${age} years old`)



// getElemenenstByClassName()
// Example 1:
const jesusChrist = document.getElementsByClassName("Jesus");
let savior = console.log(jesusChrist);

let named = savior.map(function(item){
    return item === "so";
    });
    console.log(named);


