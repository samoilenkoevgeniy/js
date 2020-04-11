const foo = function() {
	console.log(this.name);
};

foo.call({
	name: 'bob'
}); // bob

console.log('---------------');


let user = {
	name: 'Tony',
	sayHi: function() {
		console.log(`Hi, ${this.name}`);
	}
};

user.sayHi();
