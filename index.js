function refresh(response){
  temp=document.querySelector("#value");
  let temperature = response.data.temperature.current;
  let theCity=document.querySelector("#city");
  theCity.innerHTML= response.data.city
  temp.innerHTML=Math.round(temperature);
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
 
searchCity("paris");