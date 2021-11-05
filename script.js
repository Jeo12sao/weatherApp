let atlanta = document.getElementById("atlanta");
let chicago = document.getElementById("chicago");
let charlotte = document.getElementById("charlotte");
let ohio = document.getElementById("ohio");
let temp = document.getElementById("temp");
let rnc = document.getElementById("rnc");
let humid = document.getElementById("humid");
let wind = document.getElementById("wind");
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let cityFor = document.getElementById("cityfor");
let hallowb = document.getElementById("hallowb");
let body = document.getElementById("body");
let html = document.getElementById("html");
let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");
let title4 = document.getElementById("title4");
let logo = document.getElementById("logo");
let newworld = document.getElementById("newworld");
let navi = document.getElementById("navi");
let bottomblock = document.getElementById("bottomblock");
let audio = new Audio('scream2.m4a');
let audio2 = new Audio('scream3.m4a');
let audio3 = new Audio('scream4.m4a');
let audio4 = new Audio('scream5.m4a');
let audio5 = new Audio('scream6.m4a');



function loadAtlanta() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=${apiKey}`)
    .then(function(response) {
     // Parse the JSON into an actual JS object
    return response.json();
})
    .then(function(data) {
    console.log(data);
    return data;
 })
    .then(function(data){
    console.log(data.main.temp);
    atlanta.innerHTML = Math.floor((data.main.temp - 273.15) * 9/5 + 32)+"°F";
    return data;
 })
 
    .catch(() => console.log("There's an error somewhere."))
}

function loadChicago() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${apiKey}`)
    .then(function(response) {
     // Parse the JSON into an actual JS object
    return response.json();
})
    .then(function(data) {
    console.log(data);
    return data;
 })
    .then(function(data){
    console.log(data.main.temp);
    chicago.innerHTML = Math.floor((data.main.temp - 273.15) * 9/5 + 32)+"°F";
    return data;
 })
 
    .catch(() => console.log("There's an error somewhere."))
}

function loadCharlotte() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=${apiKey}`)
    .then(function(response) {
     // Parse the JSON into an actual JS object
    return response.json();
})
    .then(function(data) {
    console.log(data);
    return data;
 })
    .then(function(data){
    console.log(data.main.temp);
    charlotte.innerHTML = Math.floor((data.main.temp - 273.15) * 9/5 + 32)+"°F";
    return data;
 })
 
    .catch(() => console.log("There's an error somewhere."))
}

function loadOhio() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cleveland&appid=${apiKey}`)
    .then(function(response) {
     // Parse the JSON into an actual JS object
    return response.json();
})
    .then(function(data) {
    console.log(data);
    return data;
 })
    .then(function(data){
    console.log(data.main.temp);
    ohio.innerHTML = Math.floor((data.main.temp - 273.15) * 9/5 + 32)+"°F";
    return data;
 })
    .catch(() => console.log("There's an error somewhere."))
}

function loadTemp() {
    let city = input.value;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(api)
    .then(function(response) {
     // Parse the JSON into an actual JS object
    return response.json();
})
    .then(function(data) {
    console.log(data);
    return data;
 })
    .then(function(data){
    console.log(data.main.temp);
    cityFor.innerHTML = `${input.value} Forecast`;
    temp.innerHTML = Math.floor((data.main.temp - 273.15) * 9/5 + 32)+"°Fahrenheit";
    rnc.innerHTML = `${data.weather[0].main} Status - ${data.weather[0].description.charAt(0).toUpperCase()}${data.weather[0].description.slice(1)}`;
    humid.innerHTML = `${data.main.humidity}% Humidity`;
    wind.innerHTML = `Wind speed of ${data.wind.speed}m/s`;
    input.value = "";
    return data;
 })
 
    .catch(() => console.log("There's an error somewhere."))
}

function theDepths() {
    body.style.fontFamily = "Creepster";
    html.style.backgroundImage = "url('https://i.gifer.com/RMfD.gif')";
    cityFor.style.color = "darkred";
    cityFor.style.fontSize = "102px";
    title1.style.color = "darkred";
    title2.style.color = "darkred";
    title3.style.color = "darkred";
    title4.style.color = "darkred";
    logo.style.color = "orange";
    newworld.src = "1531898_bloody_horror_kill_knife_icon.png";
    atlanta.style.color = "orange";
    chicago.style.color = "orange";
    charlotte.style.color = "orange";
    ohio.style.color = "orange";
    navi.style.backgroundColor = "purple"
    bottomblock.style.backgroundColor = "darkred";
    input.style.fontFamily = "Creepster";
    input.style.fontSize = "25px";
    submit.style.backgroundColor = "lime";
    submit.style.color = "darkred";
    submit.style.fontFamily = "Creepster";
    temp.style.border = "3px solid blue";
    rnc.style.border = "3px solid lime";
    humid.style.border = "3px solid blue";
    wind.style.border = "3px solid lime";
    audio.play();
    audio2.play();
    audio3.play();
    audio4.play();
    audio5.play();
}

function goBack() {
    body.style.fontFamily = "Dosis";
    html.style.background = "linear-gradient(to right, #00AAFF, #00FF6C)";
    cityFor.style.color = "rgba(255, 255, 255, .85)";
    cityFor.style.fontSize = "70px";
    title1.style.color = "lightsalmon";
    title2.style.color = "lightsalmon";
    title3.style.color = "lightsalmon";
    title4.style.color = "lightsalmon";
    logo.style.color = "whitesmoke";
    newworld.src = "world.png";
    atlanta.style.color = "#00AAFF";
    chicago.style.color = "#00AAFF";
    charlotte.style.color = "#00AAFF";
    ohio.style.color = "#00AAFF";
    navi.style.backgroundColor = "rgba(0, 0, 0, .60)";
    bottomblock.style.backgroundColor = "rgba(0, 0, 0, .60)";
    input.style.fontFamily = "Dosis";
    input.style.fontSize = "20px";
    submit.style.backgroundColor = "rgba(0, 0, 0, .60)";
    submit.style.color = "rgba(255, 255, 255, .60)";
    submit.style.fontFamily = "Dosis";
    temp.style.border = "3px solid rgba(255, 255, 255, .60)";
    rnc.style.border = "3px solid rgba(255, 255, 255, .60)";
    humid.style.border = "3px solid rgba(255, 255, 255, .60)";
    wind.style.border = "3px solid rgba(255, 255, 255, .60)";
    audio.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
}



hallowb.addEventListener('mousedown', theDepths);
hallowb.addEventListener('mouseup', goBack);


submit.addEventListener('click', loadTemp);


window.addEventListener('load',loadAtlanta);
window.addEventListener('load', loadChicago);
window.addEventListener('load', loadCharlotte);
window.addEventListener('load', loadOhio);
