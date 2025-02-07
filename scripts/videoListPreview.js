const section = document.querySelector('.videos');
const videos = section.querySelectorAll('.titles li');
const previewDiv = section.querySelector('.preview');
const thumbnail = section.querySelector('.preview img');
const nameParagraph = section.querySelector('.name');

// Set the previdw
videos.forEach(titleElement => {
	titleElement.addEventListener('click', () => {
		// Set the preview thumbnail
		const imageName = titleElement.dataset.thumbnail;
		thumbnail.src = `../images/${imageName}`;
		// Set the preview title....
		const title = titleElement.querySelector('.title').textContent;
		nameParagraph.textContent = title;
	})
})


