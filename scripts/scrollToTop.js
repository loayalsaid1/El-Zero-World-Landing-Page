const button = document.querySelector('main .up-button');

// Show the button when scrolling more that 100vh
let timeoutId;
window.addEventListener('scroll', () => {
	if (timeoutId) clearTimeout(timeoutId);

	timeoutId = setTimeout(() => {
		button.classList.toggle(
			'show',
			window.scrollY > window.innerHeight
		);
	}, 100);
});

// Scroll to top on click
button.onclick =  () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
};

// Keep the button in the main section
// if the user scrolls to the footer, don't keep it hovering over the footer
const footer = document.querySelector("footer");
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight <= footer.offsetTop) {
        button.style.position = "fixed";      
    } else {
        button.style.position = "absolute";
    }

})
