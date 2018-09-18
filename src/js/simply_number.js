function simply(number) {
	let simply = true;
	for (let i = 2; i < number; i++) {

		if (number % i === 0) {
			console.log(number, i);
			simply = false;
		}
		if (!simply) {
			console.log("i'm break");
			break;
		}
	}

	return simply;
}

console.log(simply(11));