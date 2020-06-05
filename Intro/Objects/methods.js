var obj = {
    name   : "jake",
    age    : 33,
    isCool : true,
    friends: ["bob", "tina"],
    //Method
    add: function (x, y) {
        return x + y;
    }
}

// access this method - obj.add(2, 3)

// ===========
// example 2
// =============

var dogSpace = {};
dogSpace.speck = function {
    return "Woof!";
}