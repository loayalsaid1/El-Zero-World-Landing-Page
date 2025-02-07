import './eventsCountdown.js';
import './scrollToTop.js';
import './fillProgressOnView.js';
import './increaseStatsCountOnView.js';
import './videoListPreview.js';


// Fill a span in the events section with teh current year to keep relevat to the veiwer
// Sinse this is just a mock Landing page
document.querySelector('.current-year').innerHTML = new Date().getFullYear();
