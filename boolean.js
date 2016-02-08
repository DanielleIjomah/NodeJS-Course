var isValid = false;

function toggleBoolean(booleanVar) {

	if (typeof booleanVar === 'boolean') {
		return !booleanVar;
		/* If the value is a boolean,
		the function will flip it.
		If not, the function will do nothing.
		*/
	} else {
		console.log('Warning! Not a boolean!');
	}

}

var newBoolean = toggleBoolean(isValid);

console.log(newBoolean);

	/* NOTE: The short way on line 6:

		return !booleanVar;
	
	NOTE: You can do it the long way:
	
		if (booleanVar === true) {
			return false;
		} else if (booleanVar === false) {
			return true;
		}

	*/