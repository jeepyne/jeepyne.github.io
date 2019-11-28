const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

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

  const jsonURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

fetch(jsonURL)
  .then((response) => response.json())
  .then((jsObject) => {
      let head = document.getElementsByClassName('head');
      let row = document.getElementsByClassName('row');

      let d = 0
      for (i = 0; i <jsObject.list.length; i++){
        if (jsObject.list[i].dt_txt.substring == "18:00:00" && d < row.length)
        {let day = new Date(jsObject.list[i].dt_txt.substring);
          day = day.getDay();
          head[d].innerHTML = day[day];
          
        
          var dailyt = jsObject.list[i].main.temp
          document.getElementById("dailyt").textContent = jsObject.list[i].main.temp;

          let icon = "https://openweathermap.org/img/wn/" + jsObject.list[i].weather[0].icon + ".png";
          document.getElementById(icon).setAttribute("src",iconSrc);
          
          row[t].appendChild (icon);
          row[t].appendChild (text);

          d++;
        }
      }
    });