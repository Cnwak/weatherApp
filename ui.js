class UI{
constructor(){
  this.location = document.getElementById('location')
  this.cloud= document.getElementById('clouds')
  this.temp= document.getElementById('temp')
  this.humidity= document.getElementById('humidity')
  this.dewpoint= document.getElementById('dewpoint')
  this.windspeed= document.getElementById('windspeed')
  this.date= document.getElementById('date')
}

paint(details){
  this.location.textContent= `${details.weatherObservation.stationName},${details.weatherObservation.countryCode}`
  this.cloud.textContent= `${details.weatherObservation.clouds}`
  this.temp.textContent= `Temp: ${details.weatherObservation.temperature}°c`
  this.humidity.textContent= `Local Humidty: ${details.weatherObservation.humidity}%`
  this.dewpoint.textContent= `Dewpoint: ${details.weatherObservation.dewPoint}°c`
  this.windspeed.textContent= `Windspeed: ${details.weatherObservation.windSpeed}km/h`
  this.date.textContent= `Data retrieved on: ${details.weatherObservation.datetime}`
}
}