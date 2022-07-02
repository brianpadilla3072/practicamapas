
let map = L.map('map').setView([4.639386,-74.082412],7)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//agregar circulo------------
var circle = L.circle([4.639386,-74.082412], {//ubicacion
    color: 'red',//colo
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 50000//metros
}).addTo(map);//agregamos al mapa

//popup-----------
circle.bindPopup("I am a circle.");// agrega alcirculo un vento

// marcador --------------
var marker = L.marker([51.5, -0.09]).addTo(map);
//popup
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// agregar poligno----------
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
// popup----------
polygon.bindPopup("I am a polygon.").addTo(map); //agrega al poligonoun evento 






let dato = document.getElementById('select-location')//le decimos que nos traigael valor de set location
dato.addEventListener('change',function(e){//al cambiar me va a ejecutar una funcion
  let cordenadas = e.target.value.split(",");// separa las cordenadas resividas por la opcion 
  map.flyTo(cordenadas,50);//conde va a viajar  el zoom
})