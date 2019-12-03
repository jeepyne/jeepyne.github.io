//Weather Summary//
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   

    var temp = parseFloat(jsObject.main.temp);
    var speed = parseFloat (jsObject.wind.speed);
    var chill = "NaN";
      if (temp <= 50 && speed > 3){
        chill= 32.74 + (0.6215 * temp)-(35.75 * Math.pow(speed, 0.16)) + (0.4275 + temp + Math.pow (speed, 0.16));
        chill = chill.toFixed(2);
     }

    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = speed;
    
    document.getElementById("windChill").innerHTML = chill;
    
  });

// Town Events//
const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject ['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Fish Haven"){
    let card = document.createElement('section');
    let p1 = document.createElement('p');
    
    p1.textContent = towns[i].events;

    card.appendChild(p1);

    document.querySelector('div.fhlocal').appendChild(card);
    }}
  });

//Forecast //
