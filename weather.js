const apikey = "13b14387d98544d2509a75aefcc44340";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchbox = document.querySelector(".search");
const searchbutton = document.querySelector(".button");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}&units=metric`);
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/h";
}

searchbutton.addEventListener("click", () => {
  checkweather(searchbox.value);
});
