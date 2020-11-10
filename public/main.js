const socket = io();

const lat = document.getElementById('lat');
const long = document.getElementById('long');


//listen to location
socket.on('location', currentLocation => {
    
    // lat.innerText = `Current latitude is ${currentLocation.lat}`;
    // long.innerText = `Current longitude is ${currentLocation.long}`;
    lat.innerText = currentLocation


})

// Load map 
var loadMap = function (id) {
    var thimphu = [27.476596, 89.638824];
    var map = L.map(id);
    var tile_url = 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}';
    var layer = L.tileLayer(tile_url);
    map.addLayer(layer);
    map.setView(thimphu, 13);

    // map.locate({setView: true, watch:true}) /*  set property; watch: true, if you want the view to be focused on the marker  */
    //     .on('locationfound', function(e){
    //         var lat = e.latitude;
    //         var long = e.longitude;
    //         var currentLocation = {lat, long};
    //         var marker = L.marker([e.latitude, e.longitude]).bindPopup(`lat: ${currentLocation.lat} | long: ${currentLocation.long}`);          
    //         map.addLayer(marker);

    //         //emit the location to server
    //         socket.emit('currentLocation', currentLocation);
            
    //     })
    //    .on('locationerror', function(e){
    //         console.log(e);
    //         alert("Location access denied.");
    //     });
    // };


}
loadMap('map');


