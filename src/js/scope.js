let i = 5;

const foo = () => {
	let i = 20;
	console.log(`Foo i = ${i}`);
	let bar = () => {
		let i = 25;
		console.log(`Bar i = ${i}`);
	};
	bar();
	console.log(`Foo i = ${i}`);
};

foo();