const search  = document.querySelector('.search')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const value = document.querySelector('.value')
const shortDesc = document.querySelector('.short_desc')
const visibility = document.querySelector('.visibility span')
const wind = document.querySelector('.wind span')
const sun = document.querySelector('.sun span')
const time = document.querySelector('.time')
const content = document.querySelector('.content')
const body = document.querySelector('body')


async function changWeatherUi(capitalSearch){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=cb8d857e9528680474d1a7a90b239fba`

    let data = await fetch(apiURL).then(res => res.json())
    if (data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + '(m)'
        wind.innerText = data.wind.speed + '(m/s)'
        sun.innerText = data.main.humidity + '(%)'
        let temp = Math.round(data.main.temp -273)
        value.innerHTML = `${temp}<sup>o</sup>C`
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')

        body.setAttribute('class', 'hot')

        if (temp <26){
            body.setAttribute('class', 'cool')
        }
        if (temp <23){
            body.setAttribute('class', 'warm')
        }
        if (temp <18){
            body.setAttribute('class', 'cold')
        }

    }else {
        content.classList.add('hide')
    }
}
search.addEventListener('keypress', function(e){
    if (e.code === 'Enter'){
        let capitalSearch = search.value.trim()
        changWeatherUi(capitalSearch)
    }
})

changWeatherUi('Ha Noi')