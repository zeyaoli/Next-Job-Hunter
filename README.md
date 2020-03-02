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

## Update (API)

Since website like Glitch does not support "http" url (which causes insecure issue), the open skill api cannot be fetched online after I deployed my work. Thus, combining with what I learned from the backend part, I decided to transfer all the api part to the server that I build then fetch the url from the local server. 

Using node.js, express and an npm package "isomorphic-unfetch", I created the server script that is ready for fetching the api from the internet. By creating endpoint from "app.get()", I can create the url from the client side - `/endpoint?query={xxxx}`. After this, I go back to the server side and use request to get `req.query.type` to get access to variables I choose. Rest of the process is similar to what I did last week with some fetching and word processing to get the right thing that I want. Last step, I use `res.send` to send a javascript object which contains 
`
{
    activity: activity,
    description: description
}` back to the client side for fetch. In this  case, the client side code is shortened to only 10 lines, and makes the speed faster to fetch the words. 



### Next Step
- Add a loader when loading jobs
- Fix the button styling
- Bring more options (accessibility / price)
- Add a page that people can submit their own random event to the database 
