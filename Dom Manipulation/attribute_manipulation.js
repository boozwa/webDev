//Attribute manipulation

//Use getAttribute() and setAttribute() to read and write 
//attributes like src and href

//HTML Files
//<a href = "http://www.google.com"> I am a link</a>
//<img src = "logo.png">

var link = document.querySelector("a");
link.getAttribute("href");

//Change HREF attribute
link.setAttribute("href", "www.dogs.com");
//<a href = "http://www.dogs.com"> I am a link</a>

//To change the image src
var img = document.querySelector("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1536228891610-d27ef66f7110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
//The previous image was overwritten