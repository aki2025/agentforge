const axios = require('axios');

async function getWeather(city = 'Mumbai') {
  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  return response.data;
}

module.exports = { getWeather };