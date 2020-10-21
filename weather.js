//API SITE
class Weather{
  constructor(){
    
  }

  async getWeather(lat,lon){
    const weatherFetch = await fetch(`https://api.geonames.org/findNearByWeatherJSON?lat=${lat}&lng=${lon}&username=prognotest`)

    const weatherData = await weatherFetch.json()

    return weatherData
  }
}