const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject ['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name =="Preston"){
      
        let unOrder = document.createElement("ul");
        for (let e = 0; e < events.length; e++){
          let list = document.createElement("li");
          list.textContent = events [e];
          unOrder.appendChild(list);
        }
        
    let card = document.createElement("section");
    let c1 = document.createElement("p1");

    p1.textContent = towns[i].events;

    card.appendChild(unOrder);

    document.querySelector('div.preston-local').appendChild(card);
      }
    }
  });
