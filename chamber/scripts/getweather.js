 /* api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9a96722a702555a9a431e0dc0783d7ab */
 /* api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}  */


 const apikey = "9a96722a702555a9a431e0dc0783d7ab";
 const city = "Lagos";
 const country = "Nigeria";
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${apikey}&units=imperial`;
  

 async function getWeather() {
    try{
     const response = await fetch(url);
     if(response.ok) {
     const weatherData = await response.json();
     if(weatherData){
     console.log(weatherData);
     document.getElementById("temperature").innerHTML = `<strong>${weatherData.main.temp.toFixed(0)} &deg;F</strong>`;
     document.getElementById("description").innerHTML = `<strong>${weatherData.weather[0].description}</strong>`;
     document.getElementById("humidity").innerHTML = `<strong>Humidity: ${weatherData.main.humidity}%</strong>`;
 
     const iconcode = weatherData.weather[0].icon;
     const iconurl = `https://openweathermap.org/img/w/${iconcode}.png`;
     document.getElementById("weathericon").setAttribute("src", iconurl);
     document.getElementById("weathericon").setAttribute("alt", weatherData.weather[0].description);
    }else{
        throw Error(await response.text());
    }
   }
   }catch(error){
    console.log(error);
}
 }

 getWeather();  

 /* Get the 3-day forecast */   

 const forecasturl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}, ${country}&cnt=3&appid=${apikey}&units=imperial`;    