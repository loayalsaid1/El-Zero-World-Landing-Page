import {makeTwoDigitsNumber} from './helperFunctions.js';

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

const CURRENT_YEAR = new Date().getFullYear();


let countdown = setInterval(() => {
	const endDate = new Date(`Dec 31, ${CURRENT_YEAR}`).getTime();
	const currentDate = new Date().getTime();
	const diffTime = endDate - currentDate;

	const days = Math.floor(diffTime / MS_PER_DAY) % 100;
	const hours = Math.floor((diffTime % MS_PER_DAY) / MS_PER_HOUR);
	const minutes = Math.floor((diffTime % MS_PER_HOUR) / MS_PER_MINUTE);
	const seconds = Math.floor((diffTime % MS_PER_MINUTE) / MS_PER_SECOND);

	document.querySelector('#events .time .days .number').textContent = makeTwoDigitsNumber(days);
	document.querySelector('#events .time .hours .number').textContent = makeTwoDigitsNumber(hours);
	document.querySelector('#events .time .minutes .number').textContent = makeTwoDigitsNumber(minutes);
	document.querySelector('#events .time .seconds .number').textContent = makeTwoDigitsNumber(seconds);

	if (diffTime <= 0) clearInterval(countdown);
}, MS_PER_SECOND);
