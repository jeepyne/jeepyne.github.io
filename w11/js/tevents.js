const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject ['towns'];
    for (let i = 0; i < towns.length; i++ ) {
    let card = document.createElement('section');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    p1.textContent = towns[i].events;
    p2.textContent = towns[i].events;
    p3.textContent = towns[i].events;
    p4.textContent = towns[i].events;

    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);

    document.querySelector('div.local').appendChild(card);
    }
  });
