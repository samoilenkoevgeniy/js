User = function(name) {
	this.name = name;

	this.sayHello = () => {
		console.log(`Hello, I'm ${this.name}`);
	}
};

Driver = function(name, skills) {
	User.apply(this, arguments);
};