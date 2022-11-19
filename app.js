
let teudatStrNumber ="123456782";
console.log(checkTeudatZehut(teudatStrNumber));

function checkTeudatZehut(teudatStrNumber) {
	let inStr = Array.from(teudatStrNumber);
	if (inStr.length != 9) {
		return "not 9 numbers"
	}
	let resStr =inStr.map(function(symbol, index) {
		return index % 2 == 0 ? +symbol : +oddSymbol(symbol);
	});
	let res = resStr.reduce(function(res, cur) {
		return res + cur;
	},0);
	res = res % 10 == 0 ? "true" : "false";
	return res;
}

function oddSymbol(symbol) {
	return symbol * 2 < 10 ? symbol * 2 : 1 + (symbol * 2) % 10;
}
