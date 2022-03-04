// cc5be94da6c41fb61c71bc297b10ad ce

navigator.geolocation.getCurrentPosition((position) => {
    buscaPorGeolocalizao(position.coords.latitude, position.coords.longitude);
});

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
    let texto = document.querySelector('.resultado')
    texto.innerHTML = `
        <div class="nome">${local.name}</div>
        <div class="informacoes">
            <div class="temperatura">
                <div>Temperatura</div>
                <div>${local.main["temp"]} °C</div>
            </div>
            <div class="condicoes">
                <div>${local.weather[0].main}</div>
                <div>${local.weather[0].description}</div>

            </div>
        </div>
    `
}

function buscaPorNomeOuCep(event){
    event.preventDefault()
    entrada = document.querySelector('input').value
    //entradaCEP = "17021" ${encodeURI(entrada)},
    let promisse = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(entrada)}&appid=f25110b0f83adb9f7c080ee182cd1d00&units=metric&lang=pt_br`)
    promisse.then(resposta => {renderizaGeolocalizacao(resposta.data), document.querySelector('input').value = ''})
}


