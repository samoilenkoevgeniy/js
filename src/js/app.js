let object = {
	name: 'tomas',
	sayHi () {
		console.log('hello, i"m'  + this.name);
	}
};

object.sayHi();
object.sayHi();