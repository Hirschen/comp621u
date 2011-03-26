var map;
var markersArray = [];
var circlesArray = [];

function initialize() {
  var latlng = new google.maps.LatLng(23.659619, 18.929443);
  var myOptions = {
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    center: latlng,
    disableDefaultUI: true,
    overviewMapControl: true
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  google.maps.event.addListener(map, 'click', function(event) {
    addCircle(event.latLng);
  });
}

function addMarker(location) {
  marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markersArray.push(marker);
}
function addCircle(location) {
  circle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map: map,
    center: location,
    radius: 300000
  });
  circlesArray.push(circle);
}

// Deletes all markers in the array by removing references to them
function deleteOverlays() {
  /*if (markersArray) {
    for (i in markersArray) {
      markersArray[i].setMap(null);
    }
    markersArray.length = 0;
  }*/
  if (circlesArray) {
    for (i in circlesArray) {
      circlesArray[i].setMap(null);
    }
    circlesArray.length = 0;
  }
}

