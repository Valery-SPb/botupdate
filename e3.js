/* 3. Write function getSortedEvenOdd(numbers)
3.1. Takes array of numbers
3.2. Returns array sorted in the following order
3.2.1. First numbers should be the even ones in the ascending order
3.2.2. Last numbers should be the odd ones in the descending order
3.3. The input array of numbers must not been updated
3.4. Example: getSortedEvenOdd(numbers) returns new array with no update of “numbers”.
let numbers=[1,6,3,8,5,2,7,4] then being returned array will be [2, 4, 6, 8, 7, 5, 3, 1] */

let numbers = [1,6,3,8,5,2,7,4];
let res_arr = [];
console.log(`The result array is ${getSortedEvenOdd(numbers)}
     Input array is ${numbers}`);
function getSortedEvenOdd(numbers) {
	res_arr = numbers.slice().sort((a, b) => {return a%2 - b%2});
	return res_arr.sort((a, b) => {return a % 2 != 0 ? b - a : a - b});
}``