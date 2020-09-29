// add a loader
let type;
let randomWords;
let suggestion;
let prevWord;
window.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("parent-list");
  let listItems = ul.getElementsByTagName("li");
  // console.log(listItems);
  type = "education";
  for (let i = 0; i < listItems.length; i++) {
    // console.log(listItems[i]);
    listItems[i].onclick = () => {
      type = listItems[i].innerHTML;
      // console.log(type);
    };
    console.log(listItems[i].id);
    // document.getElementById(type).style.backgroundColor = "#000000";
    // document.getElementById(type).style.color = "#ffdd1b";
  }
  const getMe = document.getElementById("get-me");
  getMe.onclick = getRandom;
});

// async await
const getRandom = async () => {
  const url = `/job?type=${type}`;

  const response = await fetch(url);
  const j = await response.json();

  randomString.innerHTML = `${j.activity} to become a ${j.description}`;
};
