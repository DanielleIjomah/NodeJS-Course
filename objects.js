var pet = {};

pet.name = 'Kingsley',
pet.type = 'husband'

// Or

// var pet = {
//	name: 'Kingsley',
// 	type: 'husband'
// };

function printPet (pet) {
	console.log('You own a ' + pet.type + ' named ' + pet.name);
}

printPet(pet);
