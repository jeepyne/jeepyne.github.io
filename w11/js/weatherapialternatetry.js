const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

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

const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id==" + townID + "&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";


fetch(forecastAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  
    var dailyt = jsonObject ['dailyt'];
    for (let i = 0; i < weather.length; i++ )
    {
        if(towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven")
        {
    let article = document.createElement("article");
    let section = document.createElement('section');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let image = document.createElement('img');

    h3.textContent = towns[i].name;
    h4.textContent = towns[i].motto;
    p1.textContent = 'Founded: ' + towns[i].yearFounded;
    p2.textContent = 'Population: ' + towns[i].currentPopulation;
    p3.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + " inches";
    image.setAttribute('src', "images/" + towns[i].photo);
    image.setAttribute ('alt', towns[i].name + ' ' + ", Idaho");

    section.appendChild(h3);
    section.appendChild(h4);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);
    section.appendChild(image);

    document.querySelector('div.forecastdiv').appendChild(section);
    }
}});