let currentTemperature = document.querySelector('#temperature');
let condition = document.querySelector('#condition');
let iconRepresentation = document.querySelector('#weather-img');
let speed = document.getElementById('wind');
let chill = document.getElementById('chill');
[-25.5931, -49.4103]
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-25.5931&lon=-49.4103&appid=b7343d2bf8aba69528ad671e5fd70f04&units=metric';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = (`${weatherData.weather[0].description}`).toUpperCase();
  const weather = Math.round(weatherData.main.temp);
  const speedWeather = weatherData.wind.speed;
  const windChill = windChillCelsius(weatherData.main.temp, speedWeather);


  iconRepresentation.setAttribute("src", iconsrc);
  iconRepresentation.setAttribute("alt", desc);
  condition.innerHTML = desc;
  currentTemperature.innerHTML = weather;
  speed.innerHTML = speedWeather;
  chill.innerHTML = `${Math.round(windChill)} °C`;
}


const windChillCelsius = (temperature, windSpeed) =>
  13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
