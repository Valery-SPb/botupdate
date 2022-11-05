console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsSound = document.querySelector(".details-sound");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const HIDDEN = "hidden";
const IS_POINT = "is_point";

function setDetails(anchor) {
	detailsImage.setAttribute("src", anchor.getAttribute("data-details-image"));
	detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
	detailsSound.setAttribute("src", anchor.getAttribute("data-details-sound"));
}
for(let i = 0; i < anchors.length; i++) {
	anchors[i].addEventListener("click", function() {
		console.log("Event - click on", anchors[i]);
		setDetails(anchors[i]);
		showDetails();
	})
}function showDetails() {
	mainClass.classList.remove(HIDDEN);
	detailsContainer.classList.add(IS_POINT);
	detailsSound.play();
	setTimeout(function() {
		detailsContainer.classList.remove(IS_POINT);
	},1);
	setTimeout(function() {
		detailsSound.pause();
	},1100);
}
function hideDetails() {
	mainClass.classList.add(HIDDEN)
}
