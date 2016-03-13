// EXAMPLE 1:
var age = 24;

function localFunction () {
	age = 0;
}

localFunction();
console.log(age);

// EXAMPLE 2:
var age = 24;

function localFunction () {
	var age = 0;
}

localFunction();
console.log(age);

// EXAMPLE 3:
var age = 24;

function localFunction () {
	var age = 0;

	age = 0;
}

localFunction();
console.log(age);

// age '24' will print. But why?
// I'm not entirely sure...?






