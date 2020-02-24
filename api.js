// 1. fix if suggestion is 404
// 2. fix the repetitive random words (if this is a, not let it be a again)
// 3. style it!
let type;
let randomWords;
let suggestion;
window.addEventListener('DOMContentLoaded', () => {
	let ul = document.getElementById('parent-list');
	let listItems = ul.getElementsByTagName('li');
	// console.log(listItems);
	type = 'education';
	for (let i = 0; i < listItems.length; i++) {
		console.log(listItems[i]);
		listItems[i].onclick = () => {
			type = listItems[i].innerHTML;
			console.log(type);
		};
	}
	const getMe = document.getElementById('get-me');
	getMe.onclick = getRandom;
});

// const getType = () => {
// 	let e = document.getElementById('types');
// 	type = String(e.options[e.selectedIndex].value);
// };

// async await
const getRandom = async () => {
	// getType();
	// getList();
	const textRan = document.getElementById('randomString');
	const url = `http://www.boredapi.com/api/activity?type=${type}`;

	const response = await fetch(url);
	const bored = await response.json();
	// console.log(bored.activity);
	const activity = bored.activity;
	const words = bored.activity.split(' ');
	// console.log(words);
	randomWords = words[Math.floor(Math.random() * words.length)];
	// console.log(randomWords);
	// if (prevWord == randomWords) {
	// 	randomWords = words[Math.floor(Math.random() * words.length)];
	// }
	// let prevWord = randomWords;
	// console.log(prevWord);

	let jobURL = `http://api.dataatwork.org/v1/jobs/autocomplete?contains=${randomWords}`;

	let jobResponse = await fetch(jobURL);
	console.log(jobResponse.status);
	// need to fix this part
	if (jobResponse.status == 404) {
		// randomWords = words[Math.floor(Math.random() * words.length)];
		jobURL = `http://api.dataatwork.org/v1/jobs/normalize?job_title=${randomWords}`;
		let jobResponse = await fetch(jobURL);
		if ((jobResponse.status = 404)) {
			jobResponse = await fetch(`http://api.dataatwork.org/v1/jobs/unusual_titles`);
		}
	}
	const jobs = await jobResponse.json();
	const job = jobs[Math.floor(Math.random() * jobs.length)];
	console.log(job.suggestion);
	randomString.innerHTML = `${activity} to become a ${job.suggestion}`;
};
