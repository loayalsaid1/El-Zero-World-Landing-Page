const section = document.querySelector('.videos');
const videos = section.querySelectorAll('.titles li');
const previewDiv = section.querySelector('.preview');
const thumbnail = section.querySelector('.preview img');
const nameParagraph = section.querySelector('.name');


// Give the element the active class
const setActiveVideoTitle = (videoElement) => {
	videos.forEach(video => video.classList.remove('active'));
	videoElement.classList.add('active');
}

// Set the previdw
videos.forEach(titleElement => {
	titleElement.addEventListener('click', (e) => {
		// Set the preview thumbnail
		const imageName = titleElement.dataset.thumbnail;
		thumbnail.src = `../images/${imageName}`;
		// Set the preview title....
		const title = titleElement.querySelector('.title').textContent;
		nameParagraph.textContent = title;

		setActiveVideoTitle(titleElement);
	})
})
