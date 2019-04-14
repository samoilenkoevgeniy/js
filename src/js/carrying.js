function greeting(greet, name) {
	return greet + ' ' + name;
}

const helloGreeting = greeting.bind(null, "Hello");
const hiGreeting = greeting.bind(null, "Hi");

console.log(helloGreeting('Vasya!'));
console.log(helloGreeting('Tanya!'));