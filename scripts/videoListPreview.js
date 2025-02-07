const section = document.querySelector('.videos');
const videos = section.querySelectorAll('.titles li');
const previewDiv = section.querySelector('.preview');
const thumbnail = section.querySelector('.preview img');
const nameParagraph = section.querySelector('.name');

videos.forEach(titleElement => {
	titleElement.addEventListener('click', () => {
		const imageName = titleElement.dataset.thumbnail;
		thumbnail.src = `../images/${imageName}`;
		const title = titleElement.querySelector('.title').textContent;
		nameParagraph.textContent = title;
	})
})
