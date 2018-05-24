let foo = function() {
	console.log(this.name);
};

foo.call({
	name: 'bob'
});
