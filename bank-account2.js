var accounts = [];

var account = {};

account.balance
account.username

function createAccount(account) {
	accounts.push(account);
	return account;
}

createAccount({ balance: 300, username: 'DanielleCurio' });
createAccount({ balance: 400, username: 'KingsleyCurio' });
createAccount({ balance: 800, username: 'BoobooCurio' });

function getAccount(username) {
	// find matching account using forEach
	var result;
	accounts.forEach(function(acc) {
		// console.log(account.username);
		// console.log(username);

		if (username === acc.username) {
			result = acc;
		}
	});
	return result;
}

console.log(accounts);

// Test it out:
	// Create some new accounts, do some deposits and withdrawals

function deposit(account, amount) {
	account.balance += amount;
}

function withdraw(account, amount) {
	account.balance -= amount;
}

function getBalance(account) {
	return account.balance;
}
