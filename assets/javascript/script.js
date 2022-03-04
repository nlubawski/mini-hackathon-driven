navigator.geolocation.getCurrentPosition((position) => {
    coordenadas(position.coords.latitude, position.coords.longitude);
});


function coordenadas(latitude, longitude){
    console.log(latitude, longitude)
}