// JSON -> JavaScript Object Notation

// JSON is a string that looks like JS objects

// JSON is the format we get back once we send a HTTP request to a remote server

// The way to recognize JSON response is that the key (as in "key":value pair) has quotation mark
// The value may and may not have quotation mark but key must have

// API: Apllication Programming Interface is the medium to fetch or send data between interfaces
// All API are wriiten in JSON format

// To get API placeholder, google 
// 1.JSON fake API
// 2. Randomuser.me

// Asynchronous means not happening at the same time


// To fetch data
// const fetchMe = document.getElementById("fetcher");

// // fetch API from using the asycn keyword on yourn= function
// // also use the "await" keyword so that function knows that it has to wait a while to fecth data successfully form remote server
// // then put url of the endpoint you are fetching from
// async function fetchData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     // convert API to JSON
//     const data = await response.json()
//     console.log(data);

//     // Map tru API array
//     // check the properties of the array to know what to display e.g id, title etc.
    
//     let display = ""
    
//     data.map((item)=>{
//         display += `<h4>${item.title}</h4>`

//         // to make display show on the browser as text contents use innerHTML, to make it show in the div created at first = fetchMe
//         // hence fetchMe.innerHTML
//         fetchMe.innerHTML = display
//     })
// }
// fetchData();


// more neatly i.t to fetch data:
// const fetchMe = document.getElementById("fetcher");

// async function fetchData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json()
//     console.log(data);

// let display = ""

//  data.map((item)=>{
//     display += `<h4>${item.title}</h4>`

//     fetchMe.innerHTML = display
// })
// }
// fetchData();

// Example2:
// const fetchMe = document.getElementById("fetcher");

// async function fetchData() {
//     // Requesting Multiple Users from randomuser.me
//     const response = await fetch("https://randomuser.me/api/?results=50")
//     const data = await response.json()
//     console.log(data.results);
    
//     let display = ""
    
//     data.results.map((item)=>{
//         display += 
//     `<img src="${item.picture.large}" alt="profile image" width = "200px" height = "200px" />
//    <h5>${item.name.first}</h5>
//     <button class="btn btn-primary">View</button>
//     `
//         fetchMe.innerHTML = display
//     })
// }
// fetchData();

// Note that the result gotten is random becus we didn't program to sort from a-b or however

