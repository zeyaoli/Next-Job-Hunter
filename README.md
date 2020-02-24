# Next-Job-Hunter

A mini job generator for your next job hunting season. 

## About
Want a career change but don't know where to start? Next Job Hunter can give you some inspirations for your next job and let you know the skill you need for the career change. 

![job hunter interface](https://github.com/zeyaoli/Next-Job-Hunter/blob/master/documentations/images/image-1.png)

### Build with
- VS Code 
- [Bored API](https://www.boredapi.com/)
- [Skills API](https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview)
- Glitch

### Author
[Zeyao Li](https://zeyaoli.com) -- NYU ITP

Continuing my weird and fun ideation process, I decide to make a job generator to give users inspirations on some absurd job results. At first, I found this [Bored API](https://www.boredapi.com/) from this list of [Public API](https://github.com/public-apis/public-apis). Bored API gives users a random event from a list of users contributions. 

I split the return result and into words and combine it with [Skills API](https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview) which returns a list of jobs from open job data in US. The word that gets chosen from the Bored API will try to match a job that's more relatable. If no job is matched, the program will throw a random job to the user. Sometimes I get super absurd result from it. 

CSS is not the main part of this website but I go with the bold and dark style for the generator. I also add on the [neon glow](https://codepen.io/FelixRilling/pen/qzfoc) effect on hover. I think it really fits the whole aesthetic of it. 


![job hunter interface 2](https://github.com/zeyaoli/Next-Job-Hunter/blob/master/documentations/images/image-2.png)

### Next Step
- Add a loader when loading jobs
- Fix the button styling
- Speed up the API loading time
- Bring more options (accessibility / price)
