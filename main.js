// Initialize Leaflet map
var map = L.map('map').setView([51.505, -0.09], 13); // Example coordinates and zoom level

// Add base map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers for geographical data
geoData.forEach(function(data) {
    var marker = L.marker(data.coordinates).addTo(map);
    marker.bindPopup(data.name);
});
