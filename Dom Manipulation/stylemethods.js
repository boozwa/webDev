//get the css style selector
//I think i can only use querySelector() and 
//querySelectorAll() to be able to use classList
var tag = document.querySelector(".highlight");

//add the highlight style to the highlight class
tag.classList.add("highlight");

// open up browser and enter tag.classList.toggle(".highlight")
// to toggle styling of the highlight class

var tag1 = document.querySelector(".another-class");

//the classlist only works on CSS classes but uses HTML syntax
//make to put plain strings into the argument (DON"T USE . for class
//or # for id)
tag1.classList.add("another-class");

tag1.classList.remove("another-class");

//you can toggle a class on even if it's removed
tag1.classList.toggle("another-class");

//uncomment line below to toggle the class off at startup
//tag1.classList.toggle("another-class");