/* function greetUser(name)
	if the name exist, say hello + name
	if the name is undefined, say hello world
*/

function greetUser(name) {

	if (typeof name === 'undefined') {
		console.log('hello world');
	} else {
		console.log('hello ' + name);
	}

}

greetUser('Andrew');
greetUser();