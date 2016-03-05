function countDownWhile(start, finish) {
	while (start > finish) {
		console.log('while: ' + start);
		start--;
	}
};

countDownWhile(10, 5);

function countDownFor(start, finish) {
	for (; start >= finish; start--) {
		console.log('for: ' + start);
	}
};

countDownFor(5, 0);