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

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {

      let day = 1;

      jsObject.list.forEach (x=> {     
        if (jsObject.list[i].dt_txt.includes("18:00:00"))
        {
        let dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let day = new Date (jsObject.list[i].dt_txt);
        document.getElementById("day" + day + "-day").textContent = dayNames[day.getDay()];

        document.getElementById("day" + day + "-temp").textContent = jsObject.list[i].main.temp.toFixed(0);

        let icon = "http://openweathermap.org/img/wn/10d@2x.png" + jsObject.list[i].weather[0].icon + ".png";
        let alt = jsObject.list[i].weather[0].description;
        document.getElementById("day" + day + "-icon").setAttribute("src",iconSrc);
        document.getElementById("day" + day + "-icon").setAttribute("alt",alt); 
        //day++;
        }
      })
    });
