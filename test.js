//Salamat, Nathaniel R.
//Modified from the sample code

//Import modules
import needle from 'needle';



needle.get('http://localhost:3000/', (err, res) => {
	console.log(res.body); // prints the body of the response message
});

needle.post(
	'http://localhost:3000/add-book',
	{ name: 'Harry Potter and the Philosopher’s Stone', isbn: '978-0-7475-3269-9', author: 'J.K Rowling', year: 1997 },
	(err, res) => {
		// console.log(res.body); // Prints the server’s response
	}
);

needle.post(
	'http://localhost:3000/add-book',
	{ name: 'Harry Potter and the Chamber of Secrets', isbn: '0-7475-3849-2', author: 'J.K Rowling', year: 1998 },
	{ name: 'The Little Prince', isbn: '978-0156012195', author: 'Antoine Saint-Exupery', year: 1943 },
	(err, res) => {
		// console.log(res.body); // Prints the server’s response
	}
);

needle.post(
	'http://localhost:3000/add-book',
	{ name: 'The Little Prince', isbn: '978-0156012195', author: 'Antoine Saint-Exupery', year: 1943 },
	(err, res) => {
		// console.log(res.body); // Prints the server’s response
	}
);