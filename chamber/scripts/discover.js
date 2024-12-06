//WEATHER
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

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

//DISPLAY VISITOR MESSAGE

// Function to calculate the difference in days between two dates
function calculateDaysDifference(lastVisit, currentVisit) {
    const oneDay = 24 * 60 * 60 * 1000; // Hours*minutes*seconds*milliseconds
    const differenceInTime = currentVisit - lastVisit;
    return Math.round(differenceInTime / oneDay);
} 
 
 // Function to display the appropriate message based on the time since last visit 
function displayVisitMessage() {
    const watching = document.getElementById("watching-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = new Date();
    localStorage.setItem("lastVisit", currentVisit);
    if (!lastVisit) {
      watching.innerHTML = "Welcome! Let us know if you have any questions."; 
    } else { 
        const lastVisitDate = new Date(lastVisit);
        const daysDifference = calculateDaysDifference(lastVisitDate, currentVisit);
        if (daysDifference < 1) { 
          watching.innerHTML = "Back so soon! Awesome!";
        } else { 
          watching.innerHTML = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
        } 
    } 
} // Call the function to display the message when the page loads 

window.onload = displayVisitMessage;