let foo = function() {
	console.log(this.name);
};

foo.call({
	name: 'bob'
});

console.log('---------------');

let user = {
	sayHi: function() {
		console.log(this);
	}
};

(user.sayHi())();