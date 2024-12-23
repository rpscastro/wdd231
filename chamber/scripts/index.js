//WEATHER
// select HTML elements in the document
const weatherIcon = document.createElement('img');
const figure = document.querySelector('figure');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.createElement('figcaption');

const weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=-23.56&lon=-46.63&appid=224306604573e3bc0b8418de93f6708d&units=metric";

async function apiFetchWeather() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResultsWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetchWeather();


function displayResultsWeather(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description.toUpperCase();
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
  figure.appendChild(weatherIcon);
  figure.appendChild(captionDesc);
}

//FORECAST
// select HTML elements in the document
const forecastHtml = document.querySelector('#forecast');

const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=-23.56&lon=-46.63&appid=224306604573e3bc0b8418de93f6708d&units=metric";

async function apiFetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResultsForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetchForecast();


function displayResultsForecast(data) {

  forecastHtml.innerHTML = `
       <h3>Forecast</h3>
            <p><span class="label">${displayWeekDay(data.list[8].dt_txt)}: </span>${data.list[8].main.temp}&deg;C.</p>  
            <p><span class="label">${displayWeekDay(data.list[16].dt_txt)}: </span>${data.list[16].main.temp}&deg;C.</p>   
            <p><span class="label">${displayWeekDay(data.list[24].dt_txt)}: </span>${data.list[24].main.temp}&deg;C.</p>
      `
}

function displayWeekDay(date_txt) {
  let date = new Date(date_txt);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

//FETCH READING JSON FILES
const members_json = 'data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
  const response = await fetch(members_json);
  const data = await response.json();

  renderMembers(data.members);
}


function renderMembers(members) {

  const spotlight = members.filter((member) =>
    member.membership_level == "2=silver" || member.membership_level == "3=gold"
  );

  let html = "";

  for (let i = 0; i <= 2; i++) {

    let random = Math.floor(Math.random() * spotlight.length);

    const htmlMember =
      `<div class="card">
    <picture>
      <img src=${spotlight[random].image} alt=${spotlight[random].name} loading="lazy" width="400" height="250">
    </picture>
    <h3 id="title">${spotlight[random].name}</h3>
    <p><span class="label">Address:</span> ${spotlight[random].address}</p>
    <p><span class="label">Phone:</span> ${spotlight[random].phone}</p>
    <p><span class="label">Sector:</span> ${spotlight[random].sector}</p>
    <p><span class="label">Website: <a href= ${spotlight[random].website} target="_blank" title="Website">Website</a></p>
    <p><span class="label">Membership level:</span> ${spotlight[random].membership_level}</p>
    </div>`;

    spotlight.splice(random, 1);

    html += htmlMember;

  }

  document.querySelector("article").innerHTML = html;
}

getMemberData();