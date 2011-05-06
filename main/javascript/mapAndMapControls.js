//BASED ON 
//http://code.google.com/intl/sv-SE/apis/maps/documentation/javascript/overlays.html#RemovingOverlays
//2004-06-07
var map;
var markersArray = [];
var circlesArray = [];
var circlesMap = {};

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
    addCircle(event.latLng,10);
  });
}

function addMarker(location) {
  marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markersArray.push(marker);
}

function addCircle(location, size) {
  var rad = size*10000;
  var opa = size*0.1;
  circle = new google.maps.Circle({
    strokeColor: "#0000FF",
    strokeOpacity: 0.1,
	// no stroke for now
    strokeWeight: 0.1,  
    fillColor: "#0000FF",
    fillOpacity: opa,
    map: map,
    center: location,
    radius: rad
  });
  circlesArray.push(circle);
}

function updateCircle(location){
  if(circlesMap[location.toString()]){
    addCircle(location, parseInt(circlesMap[location.toString()]));
    circlesMap[location.toString()] = (1+parseInt(circlesMap[location])) ;
    //alert(parseInt(circlesMap[location.toString()]));
  }
  else{
    addCircle(location, 1);
    circlesMap[location.toString()] = 1;
  }
}

// Deletes all markers in the array by removing references to them
function deleteOverlays() {
  if (markersArray) {
    for (i in markersArray) {
      markersArray[i].setMap(null);
    }
    markersArray.length = 0;
  }
  if (circlesArray) {
    for (i in circlesArray) {
      circlesArray[i].setMap(null);
    }
    circlesArray.length = 0;
  }
  circlesMap = {};
}

