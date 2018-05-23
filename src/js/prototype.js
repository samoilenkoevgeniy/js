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

const WebDeveloper = Object.create(User);
WebDeveloper.constructor = (name, skills) => {
	User.constructor.apply(this, arguments);
	this.skills = skills;

	return this;
};
WebDeveloper.getSkills = () => {
	console.log(this.skills);
};

const JackDeveloper = Object.create(WebDeveloper).constructor('Jack', [
	'nodeJS', 'php'
]);

JackDeveloper.sayHello().getSkills();

