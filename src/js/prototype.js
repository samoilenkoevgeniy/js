const User = {
	constructor(name) {
		this.name = name;

		return this;
	},
	sayHello() {
		console.log(`hello, I'm ${this.name}`)
	}
};

tomas = Object.create(User).constructor('tomas');
tomas.sayHello();