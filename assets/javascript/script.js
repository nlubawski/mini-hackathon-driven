navigator.geolocation.getCurrentPosition((position) => {
    buscaPorGeolocalizao(position.coords.latitude, position.coords.longitude);
});

function buscaPorGeolocalizao(latitude, longitude){
    let promisse = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cc5be94da6c41fb61c71bc297b10adce&units=metric&lang=pt_br`)
    promisse.then(sucessoGeolocalizao)
    promisse.catch(erro => console.log(erro))
}

function sucessoGeolocalizao(resposta){
    console.log(resposta.data)
    let local = resposta.data
    renderizaNaTela(local)
}

function renderizaNaTela(local){
    let texto = document.querySelector('.resultado')
    texto.innerHTML = `
        <div class="nome">${local.name}</div>
        <div class="informacoes">
            <div class="temperatura">
                <div>Temperatura: ${local.main["temp"]} °C</div>
                <img src="http://openweathermap.org/img/wn/${local.weather[0].icon}.png" />
            </div>
            <div class="condicoes">
                <div>${local.weather[0].description}</div>
            </div>
        </div>
    `
}

function buscaPorNomeOuCep(event){
    event.preventDefault()
    entrada = document.querySelector('input').value
    //entradaCEP = "17021" ${encodeURI(entrada)},
    let promisse = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(entrada)}&appid=cc5be94da6c41fb61c71bc297b10adce&units=metric&lang=pt_br`)
    promisse.then(resposta => {renderizaNaTela(resposta.data), document.querySelector('input').value = ''})
}


