let teudatStrNumber ="123456782";
console.log(checkTeudatZehut(teudatStrNumber));
console.log(generateRandomTeudatZehut());
console.log(checkTeudatZehut(generateRandomTeudatZehut()));

function checkTeudatZehut(teudatStrNumber) {
	let inArr = Array.from(teudatStrNumber);
	if (inArr.length != 9) {
		return "not 9 numbers"
	}
	return resSumm(inArr) % 10 == 0;
}
	function resSumm(inArr) {
	let resArr = inArr.map(function(symbol, index) {
		return index % 2 == 0 ? +symbol : +oddSymbol(symbol);
	});
	return resArr.reduce(function(res, cur) {
		return res + cur;
	},0);
}
function oddSymbol(symbol) {
	return symbol * 2 < 10 ? symbol * 2 : 1 + (symbol * 2) % 10;
}
function generateRandomTeudatZehut() {
	let TeudatArr = []; 
	for (let i = 0; i < 8; i++) {
		TeudatArr[i] = Math.round(Math.random() * 9);
	}
	TeudatArr [8] = 10 - resSumm(TeudatArr) % 10;
	return TeudatArr.join("");
}

