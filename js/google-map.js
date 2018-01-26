var google;

function init() {
    var myLatlng = new google.maps.LatLng(40.455071, -80.433842);

    var mapOptions = {
        zoom: 7,
        center: myLatlng,
        scrollwheel: false,
        styles: [{
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
                    "visibility": "simplified"
                },
                {
                    "hue": "#ff0000"
                }
            ]
        }]
    };

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/loc.png'
    });

}
google.maps.event.addDomListener(window, 'load', init);