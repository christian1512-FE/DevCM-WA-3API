
// SEARCH ELEMENTS
var userFormEl = document.querySelector("#user-form");
var searchBTNEl = document.querySelector(".searchbtn");
var cityInputEl = document.querySelector("#city-name");
var citylistulEl = document.querySelector("#city-past");

var searchContainerEl = document.querySelector("search-container");

var pastcityEL = document.querySelector(".city-pastLi");

var pastSearches = [];


// DATE, TEMP, WIND, HUMIDITY
var dateEl = document.querySelector("#date")
var tempeEl = document.querySelector("#temperature");
var windSpeedEl = document.querySelector("#windSpeed");
var humiditityEl = document.querySelector("#humidity");

// TODAYS WEATHER CARD
var todaysWeatherCardEl = document.querySelector("#todaysWeather");

// FIVE-DAY-WEATHER-CONTAINER
var fivedayContainerEl = document.querySelector("#five-day-container");

// FIVE-DAY-WEATHER-CARDS
var weatherCardFiveEl = document.querySelector(".weather-card");
var fiveDayTitleEl = document.querySelector(".fiveday-title");

var APIKey = "55e9669e7be6a786d4f3880c0abd005e";

var previousCityArray = [];


var userForm = function (event) {
    event.preventDefault();

    var cityName = cityInputEl.value.trim();

    if (cityName) {                                     //WHEN CITYNAME IS TRUE BELOW HAPPENS
        cityInputEl.value = "";                        // CLEARS THE INPUT
        renderSearchHistory();
        getCityWeather(cityName);

    };
}


function init() {
    // Get stored storedSearchHistory from localStorage
    var storedSearchHistory = JSON.parse(localStorage.getItem("city-search"));

    // If storedSearchHistory were retrieved from localStorage, update the storedSearchHistory array to it
    if (storedSearchHistory !== null) {
        previousCityArray = storedSearchHistory;
    }
    // This is a helper function that will render to the DOM
    renderSearchHistory();
}


function renderSearchHistory() {

    citylistulEl.innerHTML = "";

    // Render a new button for each city
    for (var i = 0; i < previousCityArray.length; i++) {
        var prevCity = previousCityArray[i];
        // console.log(prevCity)
        var cityButton = document.createElement('button');
        cityButton.class = "city-pastLi";
        cityButton.setAttribute("value", prevCity);
        cityButton.onclick = function (event) {
            var cityName = event.target.value;
            getCityWeather(cityName);

        }
        cityButton.innerHTML = prevCity;
        citylistulEl.appendChild(cityButton);


    }
}


// FETCH WEATHER 
function getCityWeather(cityName) {

    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
        cityName +
        "&units=imperial&appid=" + APIKey;

    fetch(forecastURL)
        .then(function (cityResponse) {
            cityResponse.json()
                .then(function (data) {

                    var cardArray = []
                    for (var i = 0; i < data.list.length; i++) {
                        var dateTime = data.list[i].dt_txt.split(' ')[1]
                    if (dateTime === "12:00:00") {
                        cardArray.push(data.list[i])
                    }
                }

                    
                    var properName = data.city.name;
                    if (!previousCityArray.includes(properName)) {
                        previousCityArray.push(properName)
                        localStorage.setItem("city-search", JSON.stringify(previousCityArray))
                    }
                    displayCurrentWeather(data.list[0], properName);
                    displayWeather(cardArray);

                });
        })
}

//TODAYS WEATHER CARD 
function displayCurrentWeather(currentWeather, cityName) {

// NEW
    var date = new Date(currentWeather.dt * 1000); // Convert timestamp to milliseconds

    // todaysWeatherCardEl.style.display = 'flex';
    todaysWeatherCardEl.classList.remove('hide');

    // console.log('currentWeather', currentWeather);
    document.getElementById("city").innerText = cityName;
    document.getElementById("description").innerText = currentWeather.weather[0].description;
    // document.getElementById("date").innerText = currentWeather.dt_txt;
    
// NEW BELOW
    document.getElementById("date").innerText = date.toLocaleDateString();

    document.getElementById("weather-icon").src = "http://openweathermap.com/img/wn/" + currentWeather.weather[0].icon + "@2x.png";
    document.getElementById("temperature").innerText = currentWeather.main.temp;
    document.getElementById("windSpeed").innerText = currentWeather.wind.speed + " MPH";
    document.getElementById("humidity").innerText = currentWeather.main.humidity + " %";
}

// FIVE DAY FORECAST WEATHER CARDS
function displayWeather(cardArray, cityName) {
    console.log(cardArray)
    // console.log(cityName)

    fiveDayTitleEl.classList.remove('hide');
    if (fivedayContainerEl.innerHTML.length) {
        fivedayContainerEl.innerHTML = '';
    }

    for (var i = 0; i < cardArray.length; i++) {
        console.log(cardArray[i])


        var cardDiv = document.createElement("div")
        cardDiv.setAttribute("class", "weather-card")

        //DATE
        var date = document.createElement("p")

        date.textContent = ("Date: " + cardArray[i].dt_txt);

    
        //DESCRIPTION
        var description = document.createElement("p")
        description.textContent = cardArray[i].weather[0].description;

        //ICON
        var iconImg = document.createElement('img');
        iconImg.src = "http://openweathermap.com/img/wn/" + cardArray[i].weather[0].icon + "@2x.png";

        //TEMPERATURE 
        var temp = document.createElement("p")
        temp.textContent = ("Temperature: " + cardArray[i].main.temp + "°F");

        //WIND
        var wind = document.createElement("p")
        wind.textContent = ("Wind: " + cardArray[i].wind.speed + " MPH");

        //HUMIDITY
        var humidity = document.createElement("p")
        humidity.textContent = ("Humidity: " + cardArray[i].main.humidity + " %");

        cardDiv.append(date)
        cardDiv.append(description)
        cardDiv.append(iconImg)
        cardDiv.append(temp)
        cardDiv.append(wind)
        cardDiv.append(humidity)

        document.getElementById("five-day-container").append(cardDiv)
    }
}


userFormEl.addEventListener('submit', userForm);
init();


