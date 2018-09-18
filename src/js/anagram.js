str1 = 'qwert';
str2 = 'trewq1';

function f(str1, str2) {
	str2 = str2.split("").reverse().join("");
	return str1.length === str2.length && str1 === str2;
}

console.log(f(str1, str2));