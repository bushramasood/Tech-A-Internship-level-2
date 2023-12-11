const apiKey = "9026c03efc56197fafe343bc523a46cd";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    // Assuming you have image URLs for the weather conditions; replace "" with the correct URLs
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "assets/cloudy-removebg-preview.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "assets/sunny-removebg-preview.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "assets/rainy-removebg-preview.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "assets/partly-cloudy-removebg-preview.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "assets/snowy-removebg-preview.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
