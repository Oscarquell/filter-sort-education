import React, {useEffect, useState} from 'react';
import {getWeather} from "../../requests/weather";
import './WeatherPage.css'

const WeatherPage = () => {

    const [weatherData, setWeatherData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [city, setCity] = useState('Бишкек')

    const Weather = async () => {
        setIsLoading(true)
        try {
            const data = await getWeather(city)
            setWeatherData(data.data)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        ( async () => {
            await Weather()
            })()
    }, [])


    return (
        <div className='weather-container'>
            <div>
                <div className='weather-inputs'>
                    <input type="text" placeholder='Введите название города' onChange={(e) => setCity(e.target.value)}/>
                    <input type="button" value='Поиск' onClick={() => Weather()}/>
                </div>
                    {isLoading ?
                        <h1>Loading...</h1>
                        :
                        <div className='weather-result-wrap'>
                            <div>
                                {weatherData.location.name}, {weatherData.location.country}
                            </div>
                            <div className='weather-result-temp'>
                                <span>Температура: {weatherData.current.temp_c} C</span>
                                <span>Скорость ветра: {weatherData.current.wind_kph} км/ч</span>
                            </div>
                            <div className='weather-result-img'>
                                <img src={weatherData.current.condition.icon} alt="weather-icon"/>
                            </div>
                        </div>
                    }
            </div>
        </div>
    );
};

export default WeatherPage;