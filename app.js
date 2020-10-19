// INSTANTIATION

const weather = new Weather
const ui = new UI
const storage = new Storage
const latitude= localStorage.getItem('lat')
const longitude= localStorage.getItem('lon')


//EVENT LOADERS
document.addEventListener('DOMContentLoaded',loadWeather)
document.getElementById('getWeather').addEventListener('click',getWeatherData)

// DEFINING VALUES
const lat= document.getElementById('lat')
const lon= document.getElementById('lon')


//
//GETTING GPS LOCATION AND COORDINATES SPECIFICALLY
function getPostion(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position);
  }

}
function position(check){
lat.value=  check.coords.latitude
lon.value= check.coords.longitude

}
//


//DOM LOADING OG DEFAULT WEATHER SET OR LOCAL STORAGE LAST INPUT
function loadWeather(){
console.log(lat.value);

  if(localStorage.getItem('lat')!== null && localStorage.getItem('lon')!== null){
weather.getWeather(latitude,longitude)
.then(data=>
  {ui.paint(data)})
  }else{
    weather.getWeather('8.9751552','7.4711039999999995')
    .then(data=>
      {ui.paint(data)})
  }
  

}


// STORING COORDINATES INPUT IN LOCAL STORAGE AND USING THE INPUT INTO THE JSON FILE TO PAINT THE UI
function getWeatherData(e){
  if(lat.value !== '' && lon.value !== ''){
    storage.setCoords(lat.value,lon.value)
    weather.getWeather(lat.value,lon.value)
.then(data=>ui.paint(data))
  }

e.preventDefault()
}


//CLEAR FIELD BUTTON
function clearField(e){
lat.value= ''
lon.value= ''
  e.preventDefault()
}