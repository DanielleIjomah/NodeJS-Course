function countDownWhile(startingPoint, stoppingPoint) {
	while (startingPoint > stoppingPoint) {
		console.log('countDownWhile: ' + startingPoint);
		startingPoint--;
	}
}

countDownWhile(10, 0);

function countDownFor(startingPoint, stoppingPoint) {
	for (; startingPoint >= stoppingPoint; startingPoint --) {
		console.log('countDownFor: ' + startingPoint);
	}
}

countDownFor(20, 10);