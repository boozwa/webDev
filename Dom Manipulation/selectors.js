// Selector Excercise 

// 8 different ways to select the 1st <p> tag in the HTML document

//selct by html class syntax
var tag = document.getElementById("first");

// select by css id selector syntax
var tag1 = document.querySelector("#first");

// select the 1st element in the nodelist
//using html class syntax
var tag2 = document.getElementsByClassName("special")[0];

//select by css class syntax
var tag3 = document.querySelector(".special");

//select 1st element in the nodelist
//using html tag syntax
var tag4 = document.getElementsByTagName("p")[0];

//select by css element syntax
var tag5 = document.querySelector("p");

//select 1st element of nodelist
//using css element syntax
var tag6 = document.querySelectorAll("p")[0];

//selects the first paragraph after an h1 (sibling of h1)
// using css syntax
var tag7 = document.querySelector("h1 + p");



