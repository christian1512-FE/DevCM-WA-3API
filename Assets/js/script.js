
// SEARCH ELEMENTS
var searchBTNEl = document.getElementById('searchbtn');
var searchInputEl = document.getElementById('searchinputVal');
var inputformEL = document.getElementsByClassName("city")
var citylistulEl = document.getElementById('city-historyLi');
// var cityGroupEl = document.querySelectorAll('input-group');

var pastSearches = [];

// WEATHER ELEMENTS

//get Date(); 
var currentDateEl = document.getElementById("date")
//get Day();
var dayOneEl = document.getElementById("date1")
//TEMP
var tempeEl = document.getElementById("temperature");

//API KEY

var APIkey = "5789e00f7f8bf8619815be00e90a99c4"; //NOTE: "string"

var city = "";

// var state;
// var zipCode;


 
// var getCity = function(city) {

// var cityAPI = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid={5789e00f7f8bf8619815be00e90a99c4}";

//     fetch('cityAPI')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });
// }
// searchBTNEl.addEventListener('click', getCity);

// });


// function getAPI() {

//     fetch('queryURL')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         });
// }
// searchBTNEl.addEventListener('click', getAPI);
// console.log()










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