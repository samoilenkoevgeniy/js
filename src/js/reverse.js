str1 = 'abcd';

function reverse(str) {
	const arr = str.split('');
	const new_arr = [];
	for (let i = arr.length; i !== -1; i--) {
		new_arr.push(arr[i]);
	}
	return new_arr.join('');
}

console.log(reverse(str1));