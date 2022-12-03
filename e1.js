/* 1. Write function minMax(numbers)
1.1. Takes array of numbers
1.2. Returns array containing two numbers: first is minimal value , second is maximal value form input array
1.3. Example: minMax([1, 2, 3, 4, 5]) returns array [1, 5]
1.4. Implementation Requirements
1.4.1. Apply the reduce pattern for getting result array by one “reduce” method */

let in_arr = [1, 2, -30, 4, 5];
let mm_arr =[];

mm_arr = in_arr.reduce((mm_arr,b) => {
	if(b<mm_arr[0]) {
		mm_arr[0] = b;
	}
	
	if(b>mm_arr[1]) {
		mm_arr[1] = b;
	}
	return mm_arr;
},[in_arr[0],in_arr[0]]);

console.log(`Input array is ${in_arr},
      output array is ${mm_arr}`);