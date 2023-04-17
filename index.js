function showDate(time) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let day = days[currentTime.getDay()];
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}
let currentTime = new Date();
let showTime = document.querySelector("#time");
showTime.innerHTML = showDate(currentTime);

//Feature 2
function showCity(event) {
  event.preventDefault();
  let Searching = document.querySelector("#city");
  let cityInput = document.querySelector("#finding");
  Searching.innerHTML = cityInput.value;
}
let searchForm = document.querySelector("#getting");
searchForm.addEventListener("click", showCity);

//Feature 3
function showDegree(event) {
  event.preventDefault();
  let changeWord = document.querySelector("#degree");
  changeWord.innerHTML = "93";
}

let changeFah = document.querySelector("#link");
changeFah.addEventListener("click", showDegree);

function showCel() {
  let changeNumber = document.querySelector("#degree");
  changeNumber.innerHTML = "34";
}
let changeCel = document.querySelector("#Fahrenheit");
changeCel.addEventListener("click", showCel);
