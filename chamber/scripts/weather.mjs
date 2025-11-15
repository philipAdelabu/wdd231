
 /* api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9a96722a702555a9a431e0dc0783d7ab */
 /* api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}  */


 const apikey = "9a96722a702555a9a431e0dc0783d7ab";
 const city = "Lagos";
 const country = "Nigeria";
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${apikey}&units=imperial`;
  

 export async function getWeather() {
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

 

 /* Get the 3-day forecast */   

 const date = new Date();
const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

function getDayName(offset) {
    const day = new Date(today);
    day.setDate(today.getDate() + offset);
    return day.toLocaleDateString('en-US', { weekday: 'long' });
}



const forecasturl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}, ${country}&cnt=3&appid=${apikey}&units=imperial`;    

 export async function getForecast() {  
    
    const day1Name = getDayName(0);
    const day2Name = getDayName(1);
    const day3Name = getDayName(2);

    try{
     const response = await fetch(forecasturl);
     if(response.ok) {
     const forecastData = await response.json();
     if(forecastData){
     console.log(forecastData);
     // Day 1
     document.getElementById("day1-temp").innerHTML = `${day1Name}: <strong> ${forecastData.list[0].temp.max.toFixed(0)} &deg;F</strong><br>
     <strong>Low: ${forecastData.list[0].temp.min.toFixed(0)} &deg;F</strong>`;
 
     // Day 2
     document.getElementById("day2-temp").innerHTML = ` ${day2Name}: <strong> ${forecastData.list[1].temp.max.toFixed(0)} &deg;F</strong><br>
     <strong>Low: ${forecastData.list[1].temp.min.toFixed(0)} &deg;F</strong>`;
 
     // Day 3                                       
        document.getElementById("day3-temp").innerHTML = `${day3Name}:  <strong> ${forecastData.list[2].temp.max.toFixed(0)} &deg;F</strong><br>         
        <strong>Low: ${forecastData.list[2].temp.min.toFixed(0)} &deg;F</strong>`;      
    }else{         
        throw Error(await response.text());      
    }     
   }     
    }catch(error){              
    console.log(error);     
   } 
 }



