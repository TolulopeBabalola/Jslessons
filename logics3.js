// Events Listeners

// // To add an events listener do the ffg

// const myDan = document.querySelector(".dan");
// const mybtn = document.getElementById("clickMe");

// // when btn is clicked h1 i.e dan's color is expected to become red
// // here, click is the event

// mybtn.addEventListener("click", function(){
//     myDan.style.color = "white";
//     myDan.style.backgroundColor = "red";
//     myDan.style.padding = "20px";
// })

// note that the function above is anonymous, you can as well use a named function
// such that you have the ffg
// const myDan = document.querySelector(".dan");
// const mybtn = document.getElementById("clickMe");

// mybtn.addEventListener("click", meBtn);

// function meBtn(){
//     myDan.style.color = "white";
//     myDan.style.backgroundColor = "red";
//     myDan.style.padding = "20px";
// }


// Toggle in DOM 
// const myVisible = document.querySelector(".visible");

// // secret and open work on the botton itself not the content of the button
//  myVisible.classList.add("secret")

// // the toggle was display:none in the css style sheet
// const myToggle = document.querySelector(".toggle");

// myVisible.addEventListener("click", showit)


//  function showit(){
//     myToggle.style.display = "block";
//     myToggle.style.color = "orangeRed";
//     myToggle.style.fontSize = "25px";

// }

// const hideMe = document.querySelector(".hide");
// hideMe.classList.add("open")
// hideMe.addEventListener("click", hideit)

// function hideit(){
// myToggle.style.display = "none";
// }



// Task: Let a h1 message be display when button is clicked
// const weydem = document.querySelector(".seeYou");
// weydem.addEventListener("click", see)

// function see(){
//     const seeWetin = document.createElement("h1");
//    seeWetin.textContent = "You sabi book shuuuuuuu! My name is Tolu";
//    const body = document.body;
//    body.appendChild(seeWetin);
//    seeWetin.style.color = "magenta";
// //    console.log(seeWetin);
// }

// create an application that changes the background color of the browser
// const colors = ["red", "blue", "green", "orange", "yellow", "purple", "brown", "brown", "black"];
// const myBody = document.body;

// const mybg = document.getElementById("btn");
// mybg.addEventListener("click", seniorfunction)

// function seniorfunction (){
//     // this displays the color of the random number generated
//    myBody.style.backgroundColor = colors[genRandom()];
// }

// // generate random number and round it to whole number using Math.floor()
// function genRandom(){
//     return Math.floor(Math.random() * colors.length);
// }


//JS Events (e)
// If you put the letter e inside the () of the events listener functions you have been writing you'd see a list of events.
// For now focus on the target event

// For Instance:
// bigHead.addEventListener("click", btn);

// function btn(e){
//     console.log(e);
// (e) can otherwise be written as (event)
// }

// You can then say 
// function btn(e){
//         console.log(e); gives a list of all events
//      console.log(e.target.id);
//         // this helps to target the id of bigHead which the btn function is working on
//   
// also
//          console.log(e.target.innerText = "send";
// gets the innerText and chnages it to send
//     }

// e.target() Example:
// const btnMan = document.getElementById("btnMan");
// btnMan.addEventListener("click", showMeTarget)

// function showMeTarget(e){
// // to target button btnman say
// console.log(e.target);
// console.log(e.target.id);
// // console.log(e.target.class or classList for many classes);
// console.log(e.target.innerText);
// }


// to know the type of event I am working on, I can say 
// e.type


// Mouseover Event
// const heading = document.getElementById("emi");
// const tbabs = document.getElementById("babs");

// tbabs.addEventListener("mouseover", myEvent)
// function myEvent(e){
//     heading.style.backgroundColor = "red";
//     console.log(`{THE EVENT IS: ${e.type}}`);
// }

// same for mouseenter
// i.e tbabs.addEventListener("mouseenter", myEvent)

// same for mouseleave
// i.e tbabs.addEventListener("mouseleave", myEvent)


// create a counter that will add, subtract and reset a given number
// const counter = document.getElementById("counter");
// const myBtns = document.querySelectorAll(".btn");

// let count = 0;
// // loop tru the queryselcAll array
// myBtns.forEach((btn)=>{
   
//     btn.addEventListener("click", increase)
//     function increase(){
//         if(btn.classList.contains("add")){
//             count++
//             console.log(count);    }
//         counter.textContent = count
//     };

//     btn.addEventListener("click", decrease)
//     function decrease(){
//         if(btn.classList.contains("minus")){
//             count--
//             console.log(count);    }
//         counter.textContent = count
//     };

//     btn.addEventListener("click", backtobase)
//     function backtobase(){
//         if(btn.classList.contains("reset")){
//              count = 0;
//             console.log(count);    }
//         counter.textContent = count
//     }
// })




// Form Events

// Submit Event
// const myForm = document.getElementById("myForm");
// const username = document.getElementById("username");
// const password = document.getElementById("password");

// myForm.addEventListener("submit", formEvent);
// // You don't need to put submit on a button to trigger the event unlike click that works on buttons
// // submit event is more appropriate for forms

// function formEvent(e){
// // By default all browsers reload page when a form is submitted, to stop that event use e.preventDefault() so that only form sucess 
// // message or redirect to next page or any other next action takes place instead of reload
// // if you forget to use e.preventDefault you will loose all the data when page reloads
// e.preventDefault();
// // to get the value of user input, use .value e.g username.value
// console.log(username.value);


// // console.log(`${e.type}`);
// }


// more neatly
// const myForm = document.getElementById("myForm");
// const username = document.getElementById("username");
// const password = document.getElementById("password");

// myForm.addEventListener("submit", formEvent);
// function formEvent(e){
//     e.preventDefault();
//     console.log(username.value);
// }


// keydown Event
// triggers whenever a user "types" in the form field

// const myForm = document.getElementById("myForm");
// const username = document.getElementById("username");
// const password = document.getElementById("password");

// myForm.addEventListener("keydown", formEvent);
// function formEvent(e){
//     e.preventDefault();
//     console.log(username.value);
// }

// Keypress Event
// keypress Event will run whenever a user presses a key on the keyboard
// myForm.addEventListener("keypress", formEvent);


// Focus Event
// gets triggered whenever a user "clicks" inside the input field
// depending on what the focus does, the cursor might be clicking in that field, or border boldens etc. 
// Something just shows that that's the active field

// myForm.addEventListener("focus", formEvent);



// Blur Event
// used during form validation

// Example:
// const myForm = document.getElementById("myForm");
// const username = document.getElementById("username");
// const password = document.getElementById("password");

// myForm.addEventListener("blur", formEvent);

// function formEvent(e){
//     e.preventDefault()
   
// if(username.value.length === 0){
//     alert("please type something")
// }
//     console.log(username.value);
//     console.log(`${e.type}`);
//     // note that form isn't working here bcos action is not submit
// }



// Form Validation

// const myForm2 = document.getElementById("myForm2");
// const yourName = document.getElementById("name");
// const yourEmail = document.getElementById("email");
// const yourPassword = document.getElementById("password");
// const yourPhone = document.getElementById("phone");
// const output = document.querySelector(".output")
// output.classList.add("output")

// myForm2.addEventListener("submit", function(e){
//     e.preventDefault();
//     if(yourName.value.length === 0){
//         output.innerHTML = "Please enter your name";
//     } 
//     else if(yourEmail.value.length === 0) {
//         output.innerHTML = "Please enter your email";
//     } 
//     else if(yourPassword.value.length === 0) {
//         output.innerHTML = "Please enter your password";
//     }
//     else if(yourPhone.value.length === 0) {
//     output.innerHTML = "Please enter your phone number";
// }
// else if(isNaN(yourPhone.value)){
//     output.innerHTML = "Please enter a valid phone number";
// }
// else if(yourPassword.value.length > 6) {
//     output.innerHTML = "Password cannot exceed 6 characters"
// } 
// else {
//     output.innerHTML = "Congratulations! Form Successfully Submitted"
// }
// })

// assuming you want to use bootstrap for the css
//  you could alert a message, in that case you will copy bootstrap alert code. For example:
// output.innerHTML = 'div class="alert alert-danger" role="alert"> Please enter your name </div>'


// Babe pls learn RegEx again



// Saving Form to local storage

// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");

// const newForm = document.getElementById("ourForm")

// newForm.addEventListener("submit", submitDetail)

// function submitDetail(e){
//     // create an object containing, username, email and password
//     e.preventDefault();

//     let newUser = {
//         username: username.value,
//         email: email.value,
//         password: password.value
//     }
//     localStorage.setItem("alabian", JSON.stringify(newUser));
// }
// console.log(localStorage.getItem("alabian"));














