const quastion_pairsArr = [
	["It is a beautiful building, where you can see many pictures.", "gallery"],
	["It is a building, where you can buy milk, butter and many other things.", "shop"],
	["It is a kind of transport, by which people can go in a town.", "tram"],
	["It is a beautiful building, where people can see many wonderful plays.", "theatre"],
	["It is a building, where you can write telegrams.", "post-office"],
	["It is a building, where you can see many doctors.", "hospital"],
	["It is a subject, which you study at school.", "english"],
	["It is a building, where you can see many interesting films and concerts.", "club"]];

var old_pair_index = -1;
const divEndGame = document.querySelector(".endGame");

function start_Game() {
	pair_choice();
	const sectionElement = document.querySelector(".answerWord");
	sectionElement.innerHTML = getDivsElement();
	const sectionQuestion = document.querySelector(".question");
	sectionQuestion.innerHTML = getQuestion();
	divEndGame.innerHTML = "";
	document.getElementById('Ngame').style.display = 'none';
	console.log("new game");
}

function pair_choice() {
	do {
		pair_index = Math.floor(Math.random() * quastion_pairsArr.length);
	} while(old_pair_index == pair_index);
	old_pair_index = pair_index;
	return pair_quastion = quastion_pairsArr[pair_index];
}

function getQuestion() {
	return res = `<div> ${pair_quastion[0]}</div>`;
}

function getDivsElement() {
	let wordField = pair_quastion[1];
	let wordFieldArr = Array.from(wordField);
	let res = wordFieldArr.map(letter => `<div class="answerLetter">${letter}</div>`);
	return res.join('');
}

function onChange(event) {
	// wordAr - массив напечатанных букв
	// wordFieldArr - массив ответных букв
	const letterElements = document.querySelectorAll(".answerLetter");
	const wordGuess = event.target.value.toLowerCase();
	event.target.value = '';
	console.log(wordGuess);
	console.log(pair_quastion[1]);
	if(wordGuess == pair_quastion[1]) {
		console.log("End");
		end_Game();
	}
	const wordAr = Array.from(wordGuess);
	const wordFieldArr = Array.from(pair_quastion[1]);
	const colors = wordFieldArr.map(letter => {
		res = 'darkgrey'
		if (wordAr.indexOf(letter)  > -1) {
			res = 'black';
		}
		return res;
	})
	colors.forEach((c, i) => letterElements[i].style.background=c);
}

function end_Game() {
	divEndGame.innerHTML = "Good Game";
	document.getElementById('Ngame').style.display = 'block';
}
start_Game()