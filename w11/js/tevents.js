
const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject ['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Preston"){
    let card = document.createElement('section');
    let p = document.createElement('p');
    
    p.textContent = towns[i].events;

    card.appendChild(p);

    document.querySelector('div.preston-local').appendChild(card);
    }}
  });