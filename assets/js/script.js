
let apiKey = '3bdd81b895f457cb4ba83492d80d24b5'

function currentWeather(city) {
    let requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3bdd81b895f457cb4ba83492d80d24b5&units=metric'
    fetch(requestUrl)
    .then(function(response){
        console.log(response)
        return response.json()
        
    }) .then(function(data){
        getApi(data.coord.lat,data.coord.lon)
        console.log(data)
    })
  
}
currentWeather('Austin')


function getApi(lat,lon) {
    let requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid=3bdd81b895f457cb4ba83492d80d24b5&units=metric'
    fetch(requestUrl)
    .then(function(response){
        console.log(response)
        return response.json()
        
    }) .then(function(data){
        console.log(data)
    })
}

// let inputBox = document.getElementById("#city-input").addEventListener("click", function(){

// }

let searchButton = document.getElementById("search-button").addEventListener("click", function(){
    // get city out of input and execute current weather with that city

});
