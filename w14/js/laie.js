//Laie Weather Summary//
const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=96762&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.getElementById('currently4').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp4').textContent = jsObject.main.temp;
    document.getElementById('humidity4').textContent = jsObject.main.humidity;
    document.getElementById('windspeed4').textContent = jsObject.wind.speed;
  });