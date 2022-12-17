/* const person = {id:123, first_name: 'Vasya', last_name: 'Ivanov', year: 2000, address: {city: 'London', street: 'Sokolov', app: 100}};
const yearExpression = 'ye' + 'ar';
console.log(person[yearExpression]);

let strings = ['ui', 'abc', 'led', 'ui', 'oo', 'abc', 'abc', 'led'];
displayOccurrences(strings);
function displayOccurrences(strings) {
	const occurrences = {};
	strings.forEach(element => {
		if(occurrences[element]) {
			occurrences[element]++;
		} else {
			occurrences[element] = 1; 
		}
	});
console.log(occurrences);
const occurrencesAr = Object.entries(occurrences);
console.log(occurrencesAr);
occurrencesAr.sort((e1,e2) => e2[1]-e1[1]); 
console.log(occurrencesAr);
}
 */

const word = 'yellow';
let res = 'true';
function isAnagram(word, word2) {
	const wordAr = Array.from(word);
	const wordAr2 = Array.from(word2);
	const occurrences = {};
	wordAr.forEach(element => {
		if(occurrences[element]) {
			occurrences[element]++;
		} else {
			occurrences[element] = 1; 
		}
	});
	if(wordAr.length != wordAr2.length) {
		res = 'words should be with the same length';
	} else {
		wordAr2.forEach(element => {
			if(!occurrences[element]) {
				res = `letter ${element} do not exist`
			} else {
				occurrences[element]--;
				if(occurrences[element] < 0) {
					res = `letter ${element} should be ${occurrences[element]}`;
				}				
			}
		});
	}
	return res;
}

console.log(isAnagram(word, 'leloyw'));
console.log(isAnagram(word, 'wolley'));
console.log(isAnagram(word, 'weloyl'));
console.log(isAnagram(word, 'weloll'));
console.log(isAnagram(word, 'leloy'));
console.log(isAnagram(word, 'wollet'));
console.log(isAnagram(word, 'weloyo'));