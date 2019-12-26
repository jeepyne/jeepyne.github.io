//Nashville Weather Summary//
const lookURL = "https://api.openweathermap.org/data/2.5/weather?zip=37069&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

fetch(lookURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.getElementById('currently2').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp2').textContent = jsObject.main.temp;
    document.getElementById('humidity2').textContent = jsObject.main.humidity;
    document.getElementById('windspeed2').textContent = jsObject.wind.speed;
  });