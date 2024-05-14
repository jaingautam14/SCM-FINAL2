//JS will be writtem here.
const API_KEY = '138e5e9c6c410d915e605bb3b98f197e';


function showdeg(){
    var CITY = document.getElementById("input").value.toUpperCase();
    console.log(CITY)
    var WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
const cityname = document.getElementById("city");
cityname.innerHTML = CITY;

const temperature = document.querySelector('#temperature');
const weatherIcon = document.querySelector('.temp-box img');
const description = document.querySelector('#clouds');
    fetch(WEATHER_API)
    .then(response => response.json())
   .then(data => {
    console.log(data);
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconURL);
    temperature.textContent = `${data.main.temp}°C`;
    description.textContent = data.weather[0].description;
  })
  .catch(error => console.log(error));
}