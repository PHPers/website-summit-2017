var mapa;
var dymek = new google.maps.InfoWindow();
            
function mapaStart(){  
    var wspolrzedne = new google.maps.LatLng(52.4057709,16.9099167);
    var opcjeMapy = {
        zoom: 17,
        scrollwheel: false,
        center: wspolrzedne,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#dfdfdf"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#cfd1e2"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    };
                
    mapa = new google.maps.Map(document.getElementById("maps"), opcjeMapy);            
                
    
    function dodajMarker(lat,lng,txt) {
        var opcjeMarkera = {  
            position: new google.maps.LatLng(lat,lng),  
            icon: new google.maps.MarkerImage('images/marker.png'),
            map: mapa
        }  
        var marker = new google.maps.Marker(opcjeMarkera);
        marker.txt=txt;

        google.maps.event.addListener(marker,"click",function() {
            window.open('https://www.google.pl/maps/dir//Mi%C4%99dzynarodowe+Targi+Pozna%C5%84skie,+G%C5%82ogowska+14,+60-101+Pozna%C5%84/@52.4048709,16.9055167,16z/data=!4m15!1m6!3m5!1s0x47045b32f665e707:0x9eeed0bd55c0f364!2sMi%C4%99dzynarodowe+Targi+Pozna%C5%84skie!8m2!3d52.404955!4d16.909732!4m7!1m0!1m5!1m1!1s0x47045b32f665e707:0x9eeed0bd55c0f364!2m2!1d16.909732!2d52.404955','_blank');
        });
        return marker;
    }

    var marker = dodajMarker(52.4050709,16.9099167,'');
    
}

document.body.onload=mapaStart();