const section = document.querySelector("#stats");
const numSpans = section.querySelectorAll(".box .num");

function countUp(element) {
	const goal = Number(element.dataset.goal);

	let intervalId;
	intervalId = setInterval(() => {
		element.textContent++;
		if (element.textContent == goal) {
			clearInterval(intervalId);
		}
	}, 2000 / goal);
}

let countDone = false;
let countOnView;
countOnView = () => {
	if (countDone) return;

	if (window.scrollY + window.innerHeight - 100 >= section.offsetTop) {
		numSpans.forEach(countUp);
		countDone = true;
	}
}

// Dont' you ask about this line, Deal?
window.removeEventListener('scroll', countOnView);
window.addEventListener('scroll', countOnView);
