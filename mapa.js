//import { comafect } from "./capas/localidades_afec";

let map=L.map('map').setView([-16.05, -68.68333],12)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var osm2 = new L.TileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {minZoom: 0, maxZoom: 20 });
var miniMap = new L.Control.MiniMap(osm2,
    {
    toggleDisplay: true,
    minimized: false,
    position: "bottomleft"
    }).addTo(map);
//configurar popup
function popup(feature,layer){
if(feature.properties && feature.properties.nom_comuni){
layer.bindPopup("<strong>Comunidad: </strong"+ feature.properties.nom_comuni+"<br/>"+feature.properties.Tipo_de_Evento)}
};
//agregar capa en formato GJson
L.geoJson(comafect).addTo(map);
var comafectJS = L.geoJson(comafect,{
onEachFeature: popup
}).addTo(map);

    // Navbar shrink function https://tile.openstreetmap.org/{z}/{x}/{y}.png
//http://localhost:8080/geoserver/bdgforinlp/wms
