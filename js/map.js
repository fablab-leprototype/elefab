$(function() {
    // leaflet contact map init
    var locmap = L.map('map', { scrollWheelZoom: false }).setView([ 45.5662085,5.9267079 ], 16);
    L.tileLayer.provider('Stamen.TonerLite').addTo(locmap);
    L.marker([ 45.5662085,5.9267079 ]).addTo(locmap);
});

