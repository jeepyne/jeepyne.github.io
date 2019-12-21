//Weather Summary//
const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=80122&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   
    var temp = parseFloat(jsObject.main.temp);
    var speed = parseFloat (jsObject.wind.speed);

    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = speed;
  });
