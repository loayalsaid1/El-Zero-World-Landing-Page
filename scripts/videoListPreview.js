const section = document.querySelector('.videos');
const videos = section.querySelectorAll('.titles li');
const previewDiv = section.querySelector('.preview');
const thumbnail = section.querySelector('.preview img');
const previewVideo = section.querySelector('.preview .video');
const nameParagraph = section.querySelector('.name');


// Give the element the active class
const setActiveVideoTitle = (videoElement) => {
	videos.forEach(video => video.classList.remove('active'));
	videoElement.classList.add('active');
}

// Set the previdw
videos.forEach(titleElement => {
	titleElement.addEventListener('click', (e) => {
		setActiveVideoTitle(titleElement);

		// Make sure the video is hidden to only show the thumbnail
		if (previewVideo.style.display !== 'none')
			previewVideo.style.display = 'none';

		// Set the preview thumbnail
		const imageName = titleElement.dataset.thumbnail;
		thumbnail.src = `../images/${imageName}`;
		// Set the preview title....
		const title = titleElement.querySelector('.title').textContent;
		nameParagraph.textContent = title;
	})
})
