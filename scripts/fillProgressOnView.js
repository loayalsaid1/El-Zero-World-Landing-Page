const skillsSection = document.querySelector("#our-skills");
const skillDivs = document.querySelectorAll('#our-skills .progress-bar');

let isAnimated = false;
let fillOnView;

fillOnView = () => {
	if (isAnimated) {
		window.removeEventListener('scroll', fillOnView);
		return;
	}

	if (skillsSection.offsetTop <= window.scrollY + skillsSection.offsetHeight / 2.5) {
		skillDivs.forEach((skill, index) => {
			const fillSpan = skill.querySelector('span.fill');


			setTimeout(() => {
				fillSpan.style.width = skill.dataset.progress;
			}, index * 100);
		})
	}
}

window.addEventListener('scroll', fillOnView);
