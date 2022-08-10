const API_KEY = "a73804592d8a4cfd13d68c5faee6eef4";

function onGeoOk(position){
    const lat =position.coords.latitude; //위도
    const lon =position.coords.longitude; //경도
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        const weahter=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        city.innerText= data.name;
        weahter.innerText= `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);