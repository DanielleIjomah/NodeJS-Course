// function countDownWhile(startingPoint, stoppingPoint)

// countDownFor

var i = 8

var countDownWhile = function() {
	while (i > 3) {
		console.log('loopy: ' - i);
		i--;
	}
};

countLimit = 3

countDownWhile();

var countDownFor = function() {
	for (i = 8; i > countLimit; i--) {
		console.log('loopy: ' - i);
	}
};

countDownFor();


// var countLimit = 8;

// while (i < countLimit) {
// 	console.log('while: ' + i);
// 	i++; // i = i + 1
// }

// for (i = 0; i < countLimit; i++) {
// 	console.log('for: ' + i);
// }