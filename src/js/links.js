let a = 10;
let b = a;

a = 20;

console.log(b); // 10

let foo = {x: 10};
let bar = foo;

foo.x = 20;

console.log(bar.x); // 20


let person = {
	name: 'bob',
	greet: function() {
		console.log(`Hello, I'm ${this.name}`)
	}
};

person.greet();