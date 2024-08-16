import './WeatherInformations.css'

function WeatherInformations({weather}) {

    console.log({weather})
    const currentDate = new Date(weather.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <p>{currentDate}</p>
            <div className='weather-info'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="ícone do clima"/>
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>

            <p className='description'>{weather.weather[0].description}</p>
            <div className='details'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
        </div>
    )
}

export default WeatherInformations