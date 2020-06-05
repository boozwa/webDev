//Create an HTML file and use inspector console to use
//this .js file


// =========
// VERSION 1
// =========

//This code would call the myForEach() function
// and iterate and return all elements in the array
//	var colors = ["red", "orange", "yellow"];
//	myForEach(colors, function(someName){ 
//		console.log(someName);
//  })
function myForEach(arr, func){
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
myForEach(colors, function(color){
	console.log(color);
});

// =========
// VERSION 2 
// =========
//This function is object oriented
Array.prototype.myForEach = function(func){
  for(var i = 0; i < this.length; i++) {
   func(this[i]);
  }
};

// prints all the colors in the array
var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
colors.myForEach(function(color){
	console.log(color);
});


 
// ==============================
// Another Example
// =================================

// create an array with 3 objects
var movieAry = [{
	title: "Big Fish",
	rating: 4,
	hasWatched: true
},
{
	title: "Frozen",
	rating: 1,
	hasWatched: false
},
{
	title: "Pulp Fiction",
	rating: 5,
	hasWatched: true
}
]

//iterate and print to console
movieAry.forEach(function (blah) {  //blah = object's name (in this case - movie)
    var result = "You have ";
    if (blah.hasWatched) {
        result += "watched";
    } else {
        result += "not seen";
    }
    result += "\"" + blah.title + "\" -";
    result += blah.rating + " stars";
    console.log(result);
})

//======================
// end example
//=======================