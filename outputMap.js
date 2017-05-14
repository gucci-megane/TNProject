var naoPosition = [35.383158,139.928465]
var takPosition = [35.360073,139.610992]

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: naoPosition[0], lng: naoPosition[1]},
    zoom: 10
  });

  var maoMarker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    icon: 'nao_resize.png'
  });

  var takMarker = new google.maps.Marker({
    position: {lat: takPosition[0], lng: takPosition[1]},
    map: map,
    icon: 'tak_resize.png'
  });

}
