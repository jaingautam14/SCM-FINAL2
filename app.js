//JS will be writtem here.
const API_KEY = '138e5e9c6c410d915e605bb3b98f197e';


function showdeg(){
    var CITY = document.getElementById("input").value.toUpperCase();
    console.log(CITY)
    var WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
const cityname = document.getElementById("city");
cityname.innerHTML = CITY;