// api key 
let apiKey = '3bdd81b895f457cb4ba83492d80d24b5'

function currentWeather(city) {
    addHistorybutton(city)
    saveHistory(city)
    // api request url 
    let requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3bdd81b895f457cb4ba83492d80d24b5&units=metric'
    // fetch request
    fetch(requestUrl)
        .then(function (response) {
            console.log(response)
            return response.json()

        }).then(function (data) {
            getApi(data.coord.lat, data.coord.lon)
            console.log(data)
        })

}
function saveHistory(city) {
    let savedHistory = JSON.parse(localStorage.getItem("history"))
    if (savedHistory) {
        savedHistory.push(city)
        localStorage.setItem("history", JSON.stringify(savedHistory))
    }
    else {
        localStorage.setItem("history", JSON.stringify([city]))
    }
}
// 1. create a new btn ele
// 2.add city as this btns txt
// 3. append the btn to the history block
function addHistorybutton(city) {
    let historyBlock = document.createElement("history")
   main.append ("history");

}
currentWeather('Austin')


function getApi(lat, lon) {
    let requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=3bdd81b895f457cb4ba83492d80d24b5&units=metric'
    fetch(requestUrl)
        .then(function (response) {
            console.log(response)
            return response.json()

        }).then(function (data) {
            console.log(data)
        })
}

// let inputBox = document.getElementById("#city-input").addEventListener("click", function(){

// }

let searchButton = document.getElementById("search-button").addEventListener("click", function () {
    // get city out of input and execute current weather with that city
    let inputBox = document.getElementById("city-input").value
    currentWeather(inputBox)
});
