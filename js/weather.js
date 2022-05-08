const API_KEY = "1d084c835ecec7f65d29c93021bba37d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`    
    fetch(url).then(reponse => reponse.json()).then(data => {
        console.log(data.weather[0].main);
    });

}

function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);