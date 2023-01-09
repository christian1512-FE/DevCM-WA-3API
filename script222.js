
// SEARCH ELEMENTS
var userFormEl = document.querySelector("#user-form");
var searchBTNEl = document.querySelector("searchbtn");
var cityInputEl = document.querySelector("#city-name");
var citylistulEl = document.querySelector("#city-past");

var searchContainerEl = document.querySelector("search-container");

var pastcityEL = document.querySelector("city-pastLi");

var pastSearches = [];

// // WEATHER ELEMENTS

// //get Date(); 
var currentDateEl = document.querySelector("date");
// //get Day();

// DATE, TEMP, WIND, HUMIDITY
var dateEl = document.querySelector("date")
var tempeEl = document.querySelector("temperature");
var windSpeedEl = document.querySelector("windSpeed");
var humiditityEl = document.querySelector("humidity");

// TODAYS WEATHER CARD
var todaysWeatherCardEl = document.querySelector("todaysWeather");

// FIVE-DAY-WEATHER-CONTAINER
var fivedayContainerEl = document.querySelector("fivedayContainerEl");

// FIVE-DAY-WEATHER-CARDS
var weatherCardFiveEl = document.querySelector("weather-card");

var APIKey = "55e9669e7be6a786d4f3880c0abd005e";

var previousCityArray = [];



var userForm = function (event) {
    event.preventDefault();

    var cityName = cityInputEl.value.trim();

    if (cityName) {              //WHEN CITYNAME IS TRUE BELOW HAPPENS
        previousCityArray.push(cityName);           //ADDS NEW CITY TO PREVIOUS CITY ARRAY
        cityInputEl.value = "";                // CLEARS THE INPUT

        localStorage.setItem("citySearch", JSON.stringify(previousCityArray));     // Stringify and set key in localStorage to previousCityArray array
        renderSearchHistory();
        getCityWeather(cityName);

    };
}


function init() {
    // Get stored storedSearchHistory from localStorage
    var storedSearchHistory = JSON.parse(localStorage.getItem("citySearch"));

    // If storedSearchHistory were retrieved from localStorage, update the storedSearchHistory array to it
    if (storedSearchHistory !== null) {
        previousCityArray = storedSearchHistory;
    }

    // This is a helper function that will render to the DOM
    renderSearchHistory();

}


function renderSearchHistory() {

    citylistulEl.innerHTML = "";

    // Render a new li for each city
    for (var i = 0; i < previousCityArray.length; i++) {
        var prevCity = previousCityArray[i];

        var previousCity = document.createElement('li');        //CREATES NEW LI ELEMENT FOR PREVIOUS CITY
        previousCity.class = "city-pastLi";
        previousCity.setAttribute("city", prevCity)
        previousCity.innerHTML = prevCity;
        citylistulEl.appendChild(previousCity);



    }

    // getCityWeather("Austin");


}

// units=imperial

// FETCH WEATHER 
function getCityWeather(cityName) {

//gets data for us for the forecast & location for city
    var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${APIKey}`;

    fetch(forecastURL)
        .then(function (cityResponse) {
            cityResponse.json()


        }

}

            userFormEl.addEventListener('submit', userForm);
            init();











// SEARCH ELEMENTS
var userFormEl = document.querySelector("#user-form");
var searchBTNEl = document.querySelector("searchbtn");
var cityInputEl = document.querySelector("#city-name");
var citylistulEl = document.querySelector("#city-past");

var searchContainerEl = document.querySelector("search-container");

var pastcityEL = document.querySelector("city-pastLi");

var pastSearches = [];

// // WEATHER ELEMENTS

// //get Date(); 
var currentDateEl = document.querySelector("date");
// //get Day();

// DATE, TEMP, WIND, HUMIDITY
var dateEl = document.querySelector("date")
var tempeEl = document.querySelector("temperature");
var windSpeedEl = document.querySelector("windSpeed");
var humiditityEl = document.querySelector("humidity");

// TODAYS WEATHER CARD
var todaysWeatherCardEl = document.querySelector("todaysWeather");

// FIVE-DAY-WEATHER-CONTAINER
var fivedayContainerEl = document.querySelector("fivedayContainerEl");

// FIVE-DAY-WEATHER-CARDS
var weatherCardFiveEl = document.querySelector("weather-card");

var APIKey = "55e9669e7be6a786d4f3880c0abd005e";

var previousCityArray = [];



var userForm = function (event) {
    event.preventDefault();

    var cityName = cityInputEl.value.trim();

    if (cityName) {              //WHEN CITYNAME IS TRUE BELOW HAPPENS
        previousCityArray.push(cityName);           //ADDS NEW CITY TO PREVIOUS CITY ARRAY
        cityInputEl.value = "";                // CLEARS THE INPUT

        localStorage.setItem("citySearch", JSON.stringify(previousCityArray));     // Stringify and set key in localStorage to previousCityArray array
        renderSearchHistory();
        getCityWeather(cityName);

    };
}


function init() {
    // Get stored storedSearchHistory from localStorage
    var storedSearchHistory = JSON.parse(localStorage.getItem("citySearch"));

    // If storedSearchHistory were retrieved from localStorage, update the storedSearchHistory array to it
    if (storedSearchHistory !== null) {
        previousCityArray = storedSearchHistory;
    }

    // This is a helper function that will render to the DOM
    renderSearchHistory();

}


function renderSearchHistory() {

    citylistulEl.innerHTML = "";

    // Render a new li for each city
    for (var i = 0; i < previousCityArray.length; i++) {
        var prevCity = previousCityArray[i];

        var previousCity = document.createElement('li');        //CREATES NEW LI ELEMENT FOR PREVIOUS CITY
        previousCity.class = "city-pastLi";
        previousCity.setAttribute("city", prevCity)
        previousCity.innerHTML = prevCity;
        citylistulEl.appendChild(previousCity);

      

    }

    // getCityWeather("Austin");


}

// units=imperial

// FETCH WEATHER 
function getCityWeather(cityName) {

    
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + //gets data for us for the forecast & location for city
        cityName +
        "&units=imperial&appid="+APIKey;
  
        fetch(forecastURL)
        .then(function (cityResponse) {
            cityResponse.json()
            .then(function (data) {
                console.log(data);


                var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat="+data.city.coord.lat+"&lon="+data.city.coord.lon+"&appid=" +APIKey;
               
            //    only for city current weather
                fetch(weatherURL)
               .then(function (currentWeatherAPI){
                currentWeatherAPI.json()
                .then(function(cityData){
                    console.log(cityData);
                    document.getElementById("city").innerText = cityData.name;
                    document.getElementById("temperature").innerText = Math.round(1.8*(cityData.main.temp - 273.15) + 32);
                    document.getElementById("windSpeed").innerText = cityData.wind.speed +" MPH";
                    document.getElementById("humidity").innerText = cityData.main.humidity +" %"; 
                    
                })
               })
                    todaysWeatherCardEl.classList.add('show');
                    fivedayContainerEl.classList.add('show');

      
                })
        })
}

// getCityWeather("Austin");
getCityWeather();


userFormEl.addEventListener('submit', userForm);
init();




//main.temp

//main.humidity 

//weather.



// https://api.openweathermap.org/data/2.5/forecast?q=Denver&units=imperial&appid=5789e00f7f8bf8619815be00e90a99c4




// 5 DAY WEATHER FORECAST 

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// REQUIRES: lat, lon
// appid: API key 

// https://openweathermap.org/forecast5#limit (LINK FOR REFERENCE)

//TEMPERATURE: cnt For temperature in Fahrenheit use units=imperial

//EXAMPLE CALL BELOW:
// https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid={API KEY} &units=imperial


//MULTILINGUAL SUPPORT
//You can use the lang parameter to get the output in your language. 
// Translation is applied to the city name and description fields.
// API CALL EX: 
// http://api.openweathermap.org/data/2.5/forecast?id=524901&lang={lang}
// lang=en
// CALL BACK FUNCTION
// api.openweathermap.org/data/2.5/forecast?q=London,uk&callback=test&appid={API key}



// lat & lon API CALL need it to display weather image
// 5 day api call 



      // var forcastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=55e9669e7be6a786d4f3880c0abd005e`;
        
        // console.log(getUserCity)
        // https://api.openweathermap.org/data/2.5/forecast?q=Austin&units=metric&appid=55e9669e7be6a786d4f3880c0abd005e
        
        // var forcastURL = "https://api.openweathermap.org/data/2.5/forecast?q=Austin&units=imperial&appid=55e9669e7be6a786d4f3880c0abd005e"



              //    fivedays forcast
            // for(let i = 0; i < data.list.length; i += 8) {
            //     console.log(i);
            //     console.log(data.list[i]);

            // }
                    // showWeather(data);






                    // <!-- <div class="weather-card"> -->
                    // <!-- <div id="weatherCity">
                    //     <div>
                    //         <p>Date</p>
                    //         <p>Temp</p>
                    //         <p>Humid</p>
                    //         <p>Wind</p>
                    //     </div> -->




                         

                    getlatlon(data.city.coord.lat, data.city.coord.lon);

                    for(let i = 0; i < data.list.length; i = i + 8) {
                        console.log(data.list[i]);
                        var d = data.list[i];
                        var a = document.createElement("div");
                        a.style.color = "white";
                        a.style.border = "1px solid white";
                        a.style.padding = "10px";
                        a.style.margin = "5px";


                    
     

                    var bb = document.createElement("div");
                    var b = document.createTextNode(d.dt_txt);
                    bb.appendChild(b);
                    
                    var ic = document.createElement("div");
                    var imgIcon = document.createElement("img");
                    imgIcon.src = "http://openweathermap.com/img/wn/" + d.weather[0].icon + "@2x.png";

                    imgIcon.src = "http://openweathermap.com/img/wn/" + d.weather[0].icon + "@2x.png";
                    ic.appendChild(imgIcon);
                    
                    var ccc = document.createElement("div");
                    var c = document.createTextNode("Temp: " + d.main.temp + " F");
                    ccc.appendChild(c);

                    
                    var dd = document.createElement("div");
                    var cc = document.createTextNode("Wind: " + d.wind.speed + " MPH");
                    dd.appendChild(cc);
                    
                    var ee = document.createElement("div");
                    var e = document.createTextNode("Humid: " + d.main.humidity);
                    ee.appendChild(e);

                    a.appendChild(bb);
                    a.appendChild(ic);
                    a.appendChild(ccc);
                    a.appendChild(dd);
                    a.appendChild(ee);
                        document.getElementById("five-day-container").appendChild(a);

        // todaysWeatherCardEl.classList.remove("hide");
        // fivedayContainerEl.classList.remove("hide");

//                     }

//                 })
//         })
// }

// getCityWeather();