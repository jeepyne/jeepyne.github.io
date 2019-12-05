const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

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

  const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject ['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Soda Springs"){
    let card = document.createElement('section');
    let p1 = document.createElement('p');
    
    p1.textContent = towns[i].events;

    card.appendChild(p1);

    document.querySelector('div.sslocal').appendChild(card);
    }}
  });

  const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

  fetch(forecastAPI)
    .then((response) => response.json())
    .then((jsObject) => {
  
       
        var day = "";
        let count = 0;
    for (let i = 0; i < jsObject.list.length; i++){    
          if (jsObject.list[i].dt_txt.includes("18:00:00"))
          {
          count++;
  
          // Day //
          let newDay = "day" + count;
          var d = new Date(jsObject.list[i].dt_txt);
          var n = d.getDay();
          if (n>6){(n=n-7);
          }
          if (n == 0){
            day = "Sun";
          } else if (n == 1) {
            day = "Mon";
          } else if (n == 2) {
            day = "Tues";
          } else if (n == 3) {
            day = "Wed";
          } else if (n == 4) {
            day = "Thurs";
          } else if (n == 5) {
            day = "Fri";
          } else if (n == 6) {
            day = "Sat";
          }
    
          document.getElementById(newDay).textContent = day;
  
          //Temperature//
          var tempfore = jsObject.list[i].main.temp.toFixed(0);
  
          let highfore = 'data' + count;
          document.getElementById(highfore).textContent = tempfore;
  
          //Icon//
          let image = jsObject.list[i].weather[0].icon;
          let icon = document.createElement("icon"+ count);
          let desc = jsObject.list[i].weather[0].description;
  
          icon.setAttribute("src", "https://openweathermap.org/img/wn/" + icon + ".png");
          icon.setAttribute('alt', desc);
          
         
          }
        }
      });
  