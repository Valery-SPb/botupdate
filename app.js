/* const person = {id:123, first_name: "Vasya", last_name: "Ivanov", year: 2000, address: {city: "London", street: "Sokolov", app: 100}};
const yearExpression = "ye" + "ar";
console.log(person[yearExpression]); */

let strings = ["ui", "abc", "led", "ui", "oo", "abc", "abc", "led"];
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
