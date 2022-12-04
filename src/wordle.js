const word = "table";
const N_LETTERS = 5;
const letterElements = document.querySelectorAll(".letter-guess");
const Annotation = document.querySelector(".ant");
var numMove = 5;
function onChange(event) {
	const wordGuess = event.target.value;
	//event.target.value ='';
	
	if(word == wordGuess) {
		Annotation.innerHTML = "Congratulations you have guessed word";
		return;
	}

	if (wordGuess.length != N_LETTERS) {
		alert(`Word should contain ${N_LETTERS} letters`)
	} else {
		const wordAr = Array.from(wordGuess);
		wordAr.forEach((l,i) => letterElements[i].innerHTML = l);
		const colors = wordAr.map((l, i) => {
			let index = word.indexOf(l);
			let res = 'red';
			if (index > -1) {
				res = index == i ? 'green' : 'yellow';
			}
			return res;
		})
		numMove = numMove - 1;
		backText ();
		colors.forEach((c,i) => letterElements[i].style.color=c);
	}
}

function backText () {
	if(numMove > 0) {
		Annotation.innerHTML = `Now you have only ${numMove} moves`;
	} else {
		Annotation.innerHTML = "Sorry your guess trials have ended up";
	}

}