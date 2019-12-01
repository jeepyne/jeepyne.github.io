let page = document.getElementById('page').innerHTML
let townID = ""
switch (page) {
    case "Preston":
        townID = "5604473";
        break;

    case "Soda Springs":
        townID = "5607916";
        break;

    case "Fish Haven":
        townID = "5585010";
        break;

}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + townID + "&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

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

  const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=" + townID + "&units=imperial&APPID=ded5590f5d505bff36ebae4bc57bc495";
  fetch(forecastAPI)
      .then((response) => response.json())
      .then((jsObject) => {
          //console.log(jsObject);
  
  
    let count = 0
    for (i = 0; i < jsObject.list.length; i++) {
      if (jsObject.list[i].dt_txt.includes('18:00:00')) {
  
        count++;
          let info = document.getElementById('info' + count);
          let name = document.getElementById('day' + count);
  
          let text = document.createElement('p')
          text.innerHTML = jsObject.list[i].main.temp + " &#176;F";
  
          let icon = jsObject.list[i].weather[0].icon;
          let image = document.createElement('img');
          let desc = jsObject.list[i].weather[0].description
          image.setAttribute('src', "https://openweathermap.org/img/wn/" + icon + ".png");
          image.setAttribute('alt', desc);
  
          info.appendChild(image);
          info.appendChild(text);
  
          let myday = 'day' + count;
          var d = new Date();
          var n = d.getDay();
          n = n + count - 1;
          if (n > 6){
            (n = n-7);         
          }             
                  
          if (n == 0) {
            day = "Sun";}
          else if (n == 1) {
            day = "Mon";}
          else if (n == 2) {
            day = "Tues";}
          else if (n == 3) {
            day = "Wed";}
          else if (n == 4) {
            day = "Thurs";}
          else if (n == 5) {
            day = "Fri";}
          else if (n == 6) {
            day = "Sat";}
          
      document.getElementById(myday).textContent = day;
              }
          }        
      });;
