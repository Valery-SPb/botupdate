// HW12 - ConversionsAnyBase
let number = -11483;
let base = 2;
let inString = "10110011011011"

console.log("begin");
//console.log(fromNumberToString(number, base));
console.log(fromStringToNumber(inString, base));

function fromNumberToString(number, base) {
	let strRes = "";
	number = Math.abs(number);
	do {
		let digit = number % base;
		let symbol = String.fromCharCode(asciiFromNuber(digit));
		strRes= symbol + strRes;
		number = Math.trunc(number/base);
	} while (number !=0);
	return strRes;
}
function asciiFromNuber(number) {
	// 48-57 - 0-9 - 0-9
	// 97-122 - a-z - 10-36
	let ascNumber = 0;
	if (-1 < number && number < 10) {
		ascNumber = number + 48;
	} else if (9 < number && number < base) {
		ascNumber = number + 87;
	} else { console.log("ошибка преобразования ASCII")}
	return ascNumber;
}

function fromStringToNumber(string, base) {
	let resNumber = 0;
	for (let i = 0; i < string.length; i++) {
		let asciiNumber =string.charCodeAt(i);
		if (47 < asciiNumber && asciiNumber < 58) {
			symNumber = asciiNumber - 48;
		} else if (96 < asciiNumber && asciiNumber < 123) {
			symNumber = asciiNumber - 87;
		} else { console.log("ошибка преобразования ASCII")}
		resNumber = resNumber * base + symNumber;
	}
	return resNumber;
}