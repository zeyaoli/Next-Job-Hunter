const express = require('express');
const app = express();
const fetch = require('isomorphic-unfetch');

app.use(express.static('public'));

let bored, activity, jobFetch, jobs;

app.get('/job', (req, res) => {
	const type = req.query.type;
	// console.log(res);

	fetch(`https://www.boredapi.com/api/activity?type=${type}`)
		.then(async (response) => {
			bored = await response.json();
			// console.log(bored);
			return bored;
		})
		.then(async (bored) => {
			activity = bored.activity;
			console.log(activity);
			// return activity;

			//word processing -> let it not generate the same word back to back

			const words = activity.split(' ');
			// console.log(words);
			let randomWord = words[Math.floor(Math.random() * words.length)];
			let prevWord;
			if (prevWord == randomWord) {
				randomWords = words[Math.floor(Math.random() * words.length)];
			}
			prevWord = randomWord;
			// how to write it better here?
			jobFetch = await fetch(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${randomWord}`);
			jobs = await jobFetch.json();
			if (jobFetch.status == 404) {
				jobFetch = await fetch(`http://api.dataatwork.org/v1/jobs/normalize?job_title=${randomWord}`);
				jobs = await jobFetch.json();
				if (jobFetch.status == 404) {
					jobFetch = await fetch(`http://api.dataatwork.org/v1/jobs/unusual_titles`);
					jobs = await jobFetch.json();
				}
			}
			return jobs;
		})
		.then((jobs) => {
			const job = jobs[Math.floor(Math.random() * jobs.length)];
			let description = job.suggestion || job.title;
			console.log(description);
			res.send({
				activity    : activity,
				description : description
			});
			// return description;
		})
		.catch((err) => {
			console.log(err);
		});
});

app.listen(3000, () => {
	console.log('Server is listening to 3000');
});
