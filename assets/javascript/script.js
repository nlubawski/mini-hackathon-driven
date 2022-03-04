// cc5be94da6c41fb61c71bc297b10ad ce

navigator.geolocation.getCurrentPosition((position) => {
    buscaPorGeolocalizao(position.coords.latitude, position.coords.longitude);
});

// function coordenadas(latitude, longitude){
//     console.log(latitude, longitude)
//     buscaPorGeolocalizao(latitude, longitude)
// }

function buscaPorGeolocalizao(latitude, longitude){
    let promisse = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f25110b0f83adb9f7c080ee182cd1d00&units=metric&lang=pt_br`)
    promisse.then(sucessoGeolocalizao)
    promisse.catch(erro => console.log(erro))
}

function sucessoGeolocalizao(resposta){
    console.log(resposta.data)
    let local = resposta.data
    renderizaGeolocalizacao(local)
}


function renderizaGeolocalizacao(local){

}

function buscaPorNomeOuCep(){
    entrada = "Massaranduba"
    //entradaCEP = "17021" ${encodeURI(entrada)},
    let promisse = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(entrada)}&appid=f25110b0f83adb9f7c080ee182cd1d00&units=metric&lang=pt_br`)
    promisse.then(resposta => console.log(resposta.data))
}

buscaPorNomeOuCep()