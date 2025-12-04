
 /* api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9a96722a702555a9a431e0dc0783d7ab */
 /* api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}  */


 const apikey = "9a96722a702555a9a431e0dc0783d7ab";
 const city = "Lagos";
 const country = "Nigeria";
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${apikey}`;
  

 async function getWeather() {
    try{
     const response = await fetch(url);
     if(response.ok) {
     const weatherData = await response.json();
     if(weatherData){
     document.getElementById("temperature").innerHTML = `Temparature: <strong>${weatherData.main.temp.toFixed(0)} &deg;F</strong>`;
     document.getElementById("description").innerHTML = `Description: <strong>${weatherData.weather[0].description}</strong>`;
     document.getElementById("humidity").innerHTML = `Humidity: <strong>${weatherData.main.humidity}%</strong>`;
      iconurl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
     document.getElementById("weathericon").setAttribute('src', iconurl);  
    
    }else{
        throw Error(await response.text());
    }
   }
   }catch(error){
    console.log(error);
}
 }

 

 /* Get the 3-day forecast */   

 const d = new Date();
const tday = new Date(d.getFullYear(), d.getMonth(), d.getDate());

function getDayName(offset) {
    const day = new Date(tday);
    day.setDate(tday.getDate() + offset);
    return day.toLocaleDateString('en-US', { weekday: 'long' });
}


const lat = "6.52";
const lon = "3.37";
const cnt = 3;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apikey}`;
 
async function getForecast() {  
    
    const day1Name = getDayName(0);
    const day2Name = getDayName(1);
    const day3Name = getDayName(2);

    try{
     const response = await fetch(forecastURL);
     if(response.ok) {
     const forecastData = await response.json();
     if(forecastData){
     console.log(forecastData);
     
     // Day 1
     document.getElementById("day1-temp").innerHTML = `<strong>${day1Name}</strong>: <br>Max: ${forecastData.list[0].main.temp_max} &deg;F<br>
     Low: ${forecastData.list[0].main.temp_min} &deg;F`;
 
     // Day 2
     document.getElementById("day2-temp").innerHTML = `<strong>${day2Name} </strong>: <br>Max: ${forecastData.list[1].main.temp_max} &deg;F<br>
     Low: ${forecastData.list[1].main.temp_min} &deg;F`;
 
     // Day 3                                       
        document.getElementById("day3-temp").innerHTML = `<strong>${day3Name}</strong>:  <br>Max: ${forecastData.list[2].main.temp_max} &deg;F<br>         
        Low: ${forecastData.list[2].main.temp_min} &deg;F`;      
      
    }else{         
        throw Error(await response.text());      
    }     
   }     
    }catch(error){              
    console.log(error);     
   } 
 }

//getForecast();
getWeather();

