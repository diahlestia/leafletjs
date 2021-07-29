var map = L.map('mapid').setView([23.351597, 90.423246], 8);

var locations = [
    ["1", 25.049936, 90.334576],
    ["2", 23.351597, 90.423246],
    ["3", 24.333306, 88.032183],
    ["4", 23.243892, 88.083948],
    ["5", 24.097256, 86.220417],
    ["6", 22.958209, 86.220417]
];

//osm layer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

// map tile layer
var Stadia_Outdoors = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

Stadia_Outdoors.addTo(map)

for (var i = 0; i < locations.length; i++) {
var marker = new L.marker([locations[i][1], locations[i][2]])
    .bindPopup("You clicked marker: " + locations[i][0])
    .addTo(map);
}