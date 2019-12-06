const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

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
        
        let imagesrc = jsObject.list[i].weather[0].icon + '.png';
        let desc = jsObject.list[i].weather[0].description;
        
        let icon = "small" + count;

        document.getElementById(icon).textContent = (imagesrc);
        document.getElementById(icon).setAttribute("alt", desc);
        document.getElementById(icon).setAttribute("src", "https://openweathermap.org/img/w/" + imagesrc);
        
        }
      }
    });

