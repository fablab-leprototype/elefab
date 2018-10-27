$(function() {
    // leaflet contact map init
    var locmap = L.map('map', { scrollWheelZoom: false }).setView([ 45.5664111,5.9243184 ], 16);
    L.tileLayer.provider('Stamen.TonerLite').addTo(locmap);
    L.marker([ 45.5664111,5.9243184 ]).addTo(locmap);
});

