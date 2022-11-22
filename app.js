
//---------------- 1 ---------------------
//Output - ["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul>"]
//I done - ['<ul>","<li>abc</li>', '<li>lmn</li>', '<li>cd</li>", "</ul>']
let strings=["abc","lmn","cd"];
let ulSurrounding = ulSurround(strings);
console.log(ulSurrounding);

function ulSurround(strings) {
	let ulSurrounding = strings.map(function(element, index) {
		element = '<li>' + element + '</li>';
		if (index == 0)
			element = '<ul>","' + element;
		if (index == strings.length-1)
			element = element + '","</ul>';
		return  element
	});
	return ulSurrounding;
}
//---------------- 2 ---------------------
// Output for the above example count(strings,"abc") will be 3 and count(strings,"ab") will be 0
let strings02=["abc","lmn","cd","abc","abc"];
let subString = "abc"
res_count = -2;
console.log(`---2--- The fragment "${subString}" occurs in the string "${strings02}" ${coutSymbol(strings02, subString)} times.`);
function coutSymbol (inStr, subStr) {
	inStr.reduce(function(res, cur) {
		if (cur == subStr)
			res += 1;
		return res_count = res;
	},0);
	return res_count;
}
//---------------- 3 ---------------------
//Result: arS is not updated, arD =[10,20,30,40,4,5,6,50,60,70]
let arS = [1,2,3,4,5,6,7];
let arD = [10,20,30,40,50,60,70];
console.log(`---3--- Result array is ${arrayCopy(arS, 3, arD, 4, 3)}`);

function arrayCopy(src,srcPos,dst,dstPos,length) {
	src = arS.slice();
	dst_copy = dst.slice();
	dst = dst.slice(0,dstPos)
	src = src.slice(srcPos,srcPos + length);
	for (let i = 0; i < length; i++) {
		dst.push(src[i]);
	}
	for (let i = dstPos; i < dst_copy.length; i++) {
		dst.push(dst_copy[i]);
	}
	return dst;
}
//---------------- 4 ---------------------
let numbers=[1,2,3,4,5,6,7];
console.log(`---4--- Result array is ${move(numbers,2,4)}`);

function move(array,index,offset) {
	let temp_val = array[index];
	array.splice(index, 1,);
	array.splice(index + offset,0, temp_val);
	return array;
}