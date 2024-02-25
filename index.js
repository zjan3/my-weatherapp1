function refresh(response){
  temp=document.querySelector("#value");
  let temperature = response.data.temperature.current;
  let theCity=document.querySelector("#city");
  theCity.innerHTML= response.data.city
  temp.innerHTML=Math.round(temperature);
  let theInfo=document.querySelector("#info");
  theInfo.innerHTML=response.data.condition.description;
  

  let theHumidity=document.querySelector("#Humidity");
  theHumidity.innerHTML=`${response.data.temperature.humidity}%`;
  
  
  let theSpeed=document.querySelector("#speed");
  theSpeed.innerHTML=`${response.data.wind.speed}km/h`;

   let iconElement = document.querySelector("#icon")
   iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-temperature-icon" />`;
 
  getForecast(response.data.city);
  
}







function searchCity(city){
  let apiKey="4223558d0f0fb6t0od6867bb93f18a3d";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refresh);
}




function search (event){
  event.preventDefault();
  let inputT=document.querySelector("#input-text");
  
  searchCity(inputT.value);
}



let form=document.querySelector("#input-search");
form.addEventListener("submit", search);



function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#time");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function theForecast(response){
  console.log(response).data
let forecast=document.querySelector("#forecast");
let forecasthtml="";

response.data.daily.forEach(function(day){
      forecasthtml= forecasthtml+
      `
<dive class="weather-forecast">
              <div class="the-date">${day}</div>
              <div id="icon"><img src="" />🌤️</div>
            </div>
            <div class="the-weather-temp">${Math.round(day.temperature.maximum)}<span class="temp"> 12</span></div>
          </div>`;});
 forecast.innerHTML=forecasthtml;
        }
        
           
    

       function getForecast(city){
        let apikey="4223558d0f0fb6t0od6867bb93f18a3d";
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
        axios(apiUrl).then(theForecast);

       }
        
       searchCity("Kabul");
      