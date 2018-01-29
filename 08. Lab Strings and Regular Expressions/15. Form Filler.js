function solve(username, email, phoneNum,arr) {
    let usernameMatch = /<![A-Za-z]+!>/g;
    let emailMatch = /<@[A-Za-z]+@>/g;
    let phoneNumMatch = /<\+[A-Za-z]+\+>/g;

    for (let str of arr) {
        console.log(str
			.replace(usernameMatch, username)
            .replace(emailMatch, email)
            .replace(phoneNumMatch, phoneNum));
    }
}
solve('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    [
	'Hello, <!username!>!',
	'Welcome to your Personal profile.',
	'Here you can modify your profile freely.',
	'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
	'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
	'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'
	]
);