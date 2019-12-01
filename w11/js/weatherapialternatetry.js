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
  .then((response) => response.json())
  .then((jsObject) => {
    
    
    
   
    let d = 0;
    for (i = 0; i < jsObject.list.length; i++) {
        if (jsObject.list[i].dt_txt.substring(11, 19) == "18:00:00" && x < tablerow.length) {
          
          d++;
          
          let dia = document.getElementsByClassName('dia' + d);
          let tempic = document.getElementsByClassName('tempic' + d);
          
          day = day.getDay();
          dia[x].innerHTML = daynames[day];

         
            let text = document.createElement('p')
            text.innerHTML = jsObject.list[i].main.temp + " &#176;F";
      
            let icon = jsObject.list[i].weather[0].icon;
            let image = document.createElement('img');
            let desc = jsObject.list[i].weather[0].description

            image.setAttribute('src', "https://openweathermap.org/img/wn/" + icon + ".png");
            image.setAttribute('alt', desc);
                    
            tempic[x].appendChild(image);
            tempic[x].appendChild(text);
     


        }
      })
    });