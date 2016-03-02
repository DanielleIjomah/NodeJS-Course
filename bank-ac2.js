var accounts = [];

function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}

function deposit (account, amount) {
	account.balance += amount;
}

function withdraw (account, amount) {
	account.balance -= amount;
}

function getBalance (account) {
	return account.balance;
}

var daniellesAccount = createAccount({
	username: 'Danielle',
	balance: 0
});

deposit(daniellesAccount, 100);
console.log(getBalance(daniellesAccount));

withdraw(daniellesAccount, 11);
console.log(getBalance(daniellesAccount));

var	existingAccount = getAccount('Danielle');
console.log(getBalance(daniellesAccount));

var PinkysAccount = createAccount({
	username: 'Pinky',
	balance: 12
});

console.log(accounts);

var existingPinkysAccount = getAccount('Pinky');
console.log(existingPinkysAccount);

