//---------------- 1 ---------------------
//Output - ["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul>"]
//I done - ['<ul>","<li>abc</li>', '<li>lmn</li>', '<li>cd</li>", "</ul>']
let strings=["abc","lmn","cd"];
console.log(`---1--- input: ${strings} output: ${ulSurround(strings)}`);

function ulSurround(strings) {
	let res = strings.map(element => `<li>${element}</li>`);
	res.splice(0,0,"<ul>");
	res.push("</ul>"); 
	return res;
}
//---------------- 2 ---------------------
// Output for the above example count(strings,"abc") will be 3 and count(strings,"ab") will be 0
let strings02=["abc","lmn","cd","abc","abc"];
let subString = "abc"
console.log(`---2--- The fragment "${subString}" occurs in the string "${strings02}" ${coutSymbol(strings02, subString)} times.`);
function coutSymbol (inStr, subStr) {
	return inStr.reduce((res, cur) => cur == subStr ? res +1 : res, 0);
}
//---------------- 3 ---------------------
//Result: arS is not updated, arD =[10,20,30,40,4,5,6,50,60,70]
let arS = [1,2,3,4,5,6,7];
let arD = [10,20,30,40,50,60,70];
console.log(`---3--- Result array is ${arrayCopy(arS, 3, arD, 4, 3)}`);
function arrayCopy(src,srcPos,dst,dstPos,length) {
	src = src.slice(srcPos,srcPos + length);
	dst.splice(dstPos, 0, ...src);
	arS.forEach((e,i) => arS.splice(i,0,e * 2));
	return dst;
}
//---------------- 4 ---------------------
let numbers=[1,2,3,4,5,6,7];
console.log(`---4--- Result array is ${move(numbers,2,4)}`);
function move(array,index,offset) {
	let temp_val = array[index];
	array.splice(index, 1);
	array.splice(index + offset,0, temp_val); 
	return array;
}