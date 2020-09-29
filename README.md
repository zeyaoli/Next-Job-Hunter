# Next-Job-Hunter

A mini job generator for your next job hunting season.

## About

Want a career change but don't know where to start? Next Job Hunter can give you some inspirations for your next job and let you know the skill you need for the career change.

### Build with

- VS Code
- [Bored API](https://www.boredapi.com/)
- [Skills API](https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview)
- Glitch

<!-- ## Update (API)

Since website like Glitch does not support "http" url (which causes insecure issue), the open skill api cannot be fetched online after I deployed my work. Thus, combining with what I learned from the backend part, I decided to transfer all the api part to the server that I build then fetch the url from the local server.

Using node.js, express and an npm package "isomorphic-unfetch", I created the server script that is ready for fetching the api from the internet. By creating endpoint from "app.get()", I can create the url from the client side - `/endpoint?query={xxxx}`. After this, I go back to the server side and use request to get `req.query.type` to get access to variables I choose. Rest of the process is similar to what I did last week with some fetching and word processing to get the right thing that I want. Last step, I use `res.send` to send a javascript object which contains
`
{
    activity: activity,
    description: description
}` back to the client side for fetch. In this  case, the client side code is shortened to only 10 lines, and makes the speed faster to fetch the words.  -->

### Next Step

- Add a loader when loading jobs
- Type highlighting
