// add a loader
let type;
let randomWords;
let suggestion;
let prevWord;
window.addEventListener('DOMContentLoaded', () => {
	let ul = document.getElementById('parent-list');
	let listItems = ul.getElementsByTagName('li');
	// console.log(listItems);
	type = 'education';
	for (let i = 0; i < listItems.length; i++) {
		// console.log(listItems[i]);
		listItems[i].onclick = () => {
			type = listItems[i].innerHTML;
			// console.log(type);
		};
	}
	const getMe = document.getElementById('get-me');
	getMe.onclick = getRandom;
});

// async await
const getRandom = async () => {
	// getType();
	// getList();

	const textRan = document.getElementById('randomString');
	const url = `https://www.boredapi.com/api/activity?type=${type}`;

	const response = await fetch(url);
	const bored = await response.json();
	// console.log(bored.activity);
	const activity = bored.activity;
	const words = bored.activity.split(' ');
	// console.log(words);
	randomWords = words[Math.floor(Math.random() * words.length)];
	// console.log(randomWords);
	if (prevWord == randomWords) {
		randomWords = words[Math.floor(Math.random() * words.length)];
	}
	prevWord = randomWords;
	// console.log(prevWord);

	let jobURL = `http://api.dataatwork.org/v1/jobs/autocomplete?contains=${randomWords}`;
	let jobResponse;
	let jobs;
	try {
		jobResponse = await fetch(jobURL);
		jobs = await jobResponse.json();
	} catch (e) {
		console.log('error: ', e);
	}

	console.log(jobResponse.status);
	// need to fix this part
	if (jobResponse.status == 404) {
		jobURL = `http://api.dataatwork.org/v1/jobs/normalize?job_title=${randomWords}`;
		jobResponse = await fetch(jobURL);
		jobs = await jobResponse.json();
		if (jobResponse.status == 404) {
			jobResponse = await fetch(`http://api.dataatwork.org/v1/jobs/unusual_titles`);
			jobs = await jobResponse.json();
		}
	}
	const job = jobs[Math.floor(Math.random() * jobs.length)];
	let description = job.suggestion || job.title;
	// console.log(job.suggestion);
	randomString.innerHTML = `${activity} to become a ${description}`;
};
