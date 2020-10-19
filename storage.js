class Storage{
  constructor(){}

getCoords(lat){
if(localStorage.getItem('lat') !== null){
lat = localStorage.getItem('lat')
}
}

  setCoords(lat,lon){
    localStorage.setItem('lat',lat)
    localStorage.setItem('lon',lon)
  }
}