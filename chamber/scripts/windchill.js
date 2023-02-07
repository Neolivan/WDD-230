let temperature = parseFloat(document.getElementById('temperature').textContent)
let speed = parseFloat(document.getElementById('wind').textContent)
let chill = document.getElementById('chill')

const windChillCelsius = (temperature, windSpeed) =>
  13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;


chill.innerHTML = `${Math.round(windChillCelsius(temperature,speed))} °C`