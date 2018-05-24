let makeCounter = () => {
	let counter = 0;
	return () => {
		console.log(counter);
		counter++;
	}
};

let counter = makeCounter();

counter();
counter();
counter();

let func = () => {
	let i = 10;
	return () => {
		return i;
	}
};

let myFunc = func();

let anotherFunc = () => {
	let i = 20;
	console.log(myFunc());
};

anotherFunc();