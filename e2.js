/* 2. Write function deleteWithPrefix(strings, prefix)
2.1. Takes array of strings and a prefix value
2.2. Returns array containing the strings from the input array without strings starting with a given prefix
2.3. Example: deleteWithPrefix(['abc”, 'old_abc”, 'lmn”, '123”, 'old_lmn”], 'old_”) returns array ['abc”, 'lmn”, '123”] */

let in_arr = ['abc', 'old_abc', 'lmn', '123', 'old_lmn'];
let prefix = 'old';
let res_arr = [];
res_arr = in_arr.filter(el => !el.startsWith(prefix));
console.log(`result arrray is ${res_arr}`);

//Is working