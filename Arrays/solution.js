console.log("CONNECTED");

//print an array backwards
function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){ //trick was to start at end and make i--
		console.log(arr[i]);
	}
}

printReverse([3,6,2,5]);

//*** isUniform() ***
//function takes an array as argument and returns true if all elements are identical
function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){ //trick is to start at 1 so for loop doesn't evaluate first ==0
		if(arr[i] !== first){   
			return false;
		}
	}
	return true;
}

/* 
The follow solution with .forEach() will not work
(see Colt's explanation here: https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861414?start=296), 
see link below for a potential solution, but bear in mind that a for loop is preferred
for this sort of problem.
Alternate solution with .forEach: https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/2072936
*/

// function isUniform(arr){
// 	var first = arr[0];
// 	arr.forEach(function(element){
// 		if(element !== first){
// 			return false;
// 		}
// 	});

// 	return true;
// }

// *** sumArray() ***
//totalize all elements in an array
function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

// *** max() ***
//return the maximum element in an array
function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}