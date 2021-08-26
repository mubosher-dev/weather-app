const api = {
    key : "9e97756ebdd39cfb819d829598516935",
    baseurl : "http://api.openweathermap.org/data/2.5/"
};

const searchBox = document.querySelector(".search-box");

searchBox.addEventListener('keypress', setQuery)

function setQuery(e) {
    if(e.keyCode == 13){
        getresults(searchBox.value);
        console.log(searchBox.value);
    }
}
function getresults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    })
    .then(displayResults);
}
function displayResults(weather){
    console.log(weather);
    let city = document.querySelector(".city");
    city.innerHTML = `${weather.name},${weather.sys.country}`;
    let now = new Date();
    let date = document.querySelector('.date');
    date.innerHTML = dateBuilder(now);
    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
    let weatheri = document.querySelector('.weather');
    weatheri.innerHTML = weather.weather[0].main;
    let hiLow = document.querySelector('.hi-low');
    hiLow.innerHTML = `${Math.round(weather.main.temp_min)} °C  / ${Math.round(weather.main.temp_max)} °C `
}

function dateBuilder(s) {
    let months = ['January', 'Febraury', "March", 'April', 'May', "June", 'July', "August", "September", "October", "November", "December"];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thousday', "Friday", "Saturday"];
    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();


    return `${day} ${date} ${month} ${year}` ;
}