var grades = [100, 50, 79];

var totalGrade = 0;

grades.forEach(function (grade) {
	totalGrade = totalGrade + grade;
	//Optional extra line to keep track of total:
	//console.log('Current total is ' + totalGrade);
});

console.log(totalGrade);

console.log(totalGrade / grades.length);