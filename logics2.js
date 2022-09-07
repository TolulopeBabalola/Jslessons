// Methods of windows object

// alert() method

// function learnAlert (){
//     alert("welcome Alabian talkative!") ;
//  }
//  learnAlert();



// confirm()

// function msg(){
//     const submitForm = confirm("Click ok if details are correct or cancel");
//     if(submitForm == true){
//         alert("ok");
//     } else{
//         alert("cancel");
//     }
// }
//  <input type="button" value="click" onclick="msg()"/>
// better still
// <button onclick="msg()">click</button>

// prompt()
// check logics.js page for examples


// open()
// function toOpen() {
//     open("https://www.w3schools.com");
// }
// <button onclick="toOpen()">click</button>


// setTimeOut()
// used for counter, animation and other timing effects, it takes a funtion, the itself will be used in another 
// function which does the main 
// actually, the program waits for the specified time before it takes effect
// function timeOut() {
//     setTimeout(function () {
//             alert("welcome to screen! but u gat to wait for 2secs")
//         }, 2000
// );
// };

// SetInterval
// repeats program based on specified time
// function greet(){
//     // console.log("Hello world!");
//     document.write("Hello world!");
// }

// setInterval(greet, 3000);


// Local Storage in JS

// SetItem() - used to store user's data on their browser
// to view inspect browser -> Application -> Local Storage

// Example:
// const myStorage1 =  localStorage.setItem("Teacher", "Bimbo");
// console.log(myStorage1);

// const myStorage2 =  localStorage.setItem("Teacher2", "Bimbola");
// console.log(myStorage2);


// JSON.stringify()
// Note: if the date to be stored is an array or object you have to convert to string using JSON.stringify()

// const people = ["James", "Jane", "Jack", "Jill"];
// localStorage.setItem("myStorage2", JSON.stringify(people));


// const Babs = {
// hName: "Moses",
// wName: "Tolu",
// hAge: 32,
// wAge:30
// }
// localStorage.setItem("family", JSON.stringify(Babs));

// // getItem() - to retreive data from local storage 
//  console.log(localStorage.getItem("family"));


// // removeItem() - to remove every detail from browser
// console.log(localStorage.removeItem("myStorage2"));
// common sense says getItem() before using delete


// // clear()- clear all items in local storage
// console.log(localStorage.clear());

// key()- pass a number to rtreive key from local storage

// Limitation of Local Storage
//sensitive data can't be stored here
// limited to 5mb accross major browsers
// insecure and has no data protection and can be accessed by any code on your web page
// it is synchronous i.e operation is only exceuted when they are called e.g by a button
// only stores strings
 


// HTML DOM
// fUNCTIONS TO SELECT DOM ELEMENTS

// getElementsById()
// const myBoy = document.getElementById("goodboy");
// console.log(myBoy);

// const myBoy = document.getElementById("good");
// const changeColor = myBoy.style.color = "red";
// console.log(changeColor);


// getElemenenstByClassName()
// Example 1:
// const jesusChrist = document.getElementsByClassName("Jesus");
// for (jesus of jesusChrist){
//     console.log(jesus);
// }

// getElementByTageName()
// Example 
// const elem = document.getElementsByTagName("div");
// console.log(elem);


// CSS DOM
// querySelector() - used for styling css, call Id by # and class by ., you can also select by tagname
// const myDesign = document.querySelector("#fbi");
// myDesign.style.color="green";

// const myDesign2 = document.querySelector(".fbi");
// console.log(myDesign2);

// // queryselector selects only one class item(popularly the 1st item), it ignores others
// const foodBasket = document.querySelector(".food");
// console.log(foodBasket);

// querySelectorAll()
// selects all items that bear a classname and that is commonly called a NodeList
// NodeList is always an array. Always use your console to check what is an array and what is not
// const foodList = document.querySelectorAll(".food");
// for (let i=0; i < foodList.length; i++){
//     foodList[i].style.backgroundColor = "red";
// }



// Traversing(Navigating) the DOM from parent to Children
// .childNodes

// This gives NodeList of  tetxs and links which are children of parent primary
// const navigation = document.querySelector("#primary");
// let element = navigation.childNodes;
// console.log(element);

// .children
// This returns a html collection of links i.e children
// const navigation2 = document.querySelector("#primary");
// let element2 = navigation2.children;
// console.log(element2);

// To selects an elemet, since it is a collection(array) just

// const navigation3 = document.querySelector("#primary");
// let element3 = navigation3.children[0];
// console.log(element3);

// To replace the text content
// const navigation4 = document.querySelector("#primary");
// let element4 = navigation4.children[1].textContent ="Entertainment";



// Transversing the DOM from children to parent
// note we are selecting by tagname li

// This gives us the parent which is <ul>
// const firstListItem = document.querySelector("li");
// const list = firstListItem.parentElement;
// console.log(list);

// Acessing grandparents
// const agbaListItem = document.querySelector("li");
// const list = agbaListItem.parentElement.parentElement;
// console.log(list);

// In styling css with JS DOM, camels casing is used for any stylename with two words e.g background-color 
// is backgroundColor, text-decoration is textDecoration ect.

// Adding class to Id elements, note class works but id name still shows on the console

// let idcard = document.getElementById("intro");
// idcard.className = "note";
// let myNote = document.querySelector(".note");
// myNote.style.backgroundColor = "pink";
// myNote.style.fontSize = "32px";
// myNote.style.fontWeight = "bold";
// console.log(myNote);

// Alternative ways to add class to Id
// let talk = document.getElementById("informate");

// // adds a single class name. it adds the css properties of eyimba to the informate id.
// // to create eyimba css properties, write your .eyimba{css codes} on your styles.css sheet
// talk.classList.add("eyimba"); 


// // To add multiple class names. it adds all the css properties of arsenal, manu and chelsea to the informate id.
// // this prevents rewritting alsready existign css properties
// talk.classList.add("arsenal", "manu", "chelsea"); 


// // to remove classname
// talk.classList.remove("manu");

// // to remove multiple classes
// talk.classList.remove("arsenal", "chelsea");

// // to check if a class name exists
// if(talk.classList.contains("eyimba")){
// alert("I dey!");
// }
// console.log(talk);

// toggle literally does on and off i.e if it is on, off it and if it is off, on it.
// if class visible exists, remove it, if it does not exist add it.
// talk2.classList.toggle("visible"); 
// console.log(talk2);



// OTHER DOM MANIPULATION

// creating elements ()
// create an anchor tag, div, h1 in an existing project
// note that these will not show in the html sheet but if appended to body will show on the browser

// const myLink = document.createElement("a");
// const myH = document.createElement("h1");
// const mydiv = document.createElement("div");
// console.log(myLink, myH, mydiv);


// add an id to the element created
// const myLink = document.createElement("a");
// myLink.id = "newLink";

// // to add href
// myLink.href = "https://w3schools.com"

// // to add a class to the newly created element
// myLink.className = "newClassLink";

// // to add content to the element created
// myLink.textContent = "Go to w3schools"
// console.log(myLink)

// alternatively innerHTML does the same thing but it is used when content includes html tags
// myLink.textContent = "<p>Go to w3schools</p>"
// console.log(myLink)

// since myLink above has no parent element yet, you can append to the body
// append to body makes it show on the browser
// don't ever call the body using doc.getElemByBody or queryselector(body), that's never done instead

// const dashBodyPikin = document.body;
// dashBodyPikin.appendChild(myLink);


// to append a child to an existing div on the index.html page instead of appending to the body
// const ourDiv = document.getElementById("ourDiv");
// ourDiv.appendChild(myLink);
// console.log(ourDiv);


// To remove element from DOM
// const removeElem = document.querySelectorAll(".goodies");
// removeElem[0].remove();
// console.log(removeElem);


// setAttribute()
// used to give classname or id to an attribute. 
// For instance alt is an atrribute of  img
// check google for list of html attributes : https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes

// Example: 
// const yourHead = document.createElement("h3");
// // class being the attribute and theHeadClass being the name of the class attribute
// yourHead.setAttribute("class", "theHeadClass");
// yourHead.setAttribute("id", "headID");

// // to remove attribute
// yourHead.removeAttribute("class");
// console.log(yourHead);

