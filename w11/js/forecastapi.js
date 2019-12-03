const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4e16acb56e4905a6e4220f0853f8c0ca";

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {

      let count = 0

  for (i = 0; i < jsObject.list.length; i++){    
        if (jsObject.list[i].dt_txt.includes("18:00:00"))
        {
        count++;

        let day = document.getElementById("day" + count);
        let data = document.getElementById("data"+ count);
        

        // Day //
        let dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let day = new Date();
        let dayofWeek=day.getDay();
        document.getElementById("day").textContent = dayNames[dayofWeek];
        
        //Temperature//
        let temp= document.createElement("p");
        temp.innerHTML = jsObject.list[i].main.temp +"&#176;F";

        //Icon//
        let icon = jsObject.list[i].weather[0].icon;
        let image = document.createElement ("img");
        let desc = jsObject.list[i].weather[0].description;

        image.setAttribute ("src", "https://openweathermap.org/img/wn/" + icon + ".png");
        image.setAttribute ("alt", desc);

        data.appendchild(image);
        data.appendchild(temp);

       
       
        }
      }
    });

