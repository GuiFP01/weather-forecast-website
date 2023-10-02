import React from 'react'
import "./CurrentWeatherCard.scss"


function CurrentWeatherCard({data}) {
    return (
        <div className='weather-container'>
            <div className='top'>
                <div>
                    <p className='city-name'>{data.city}</p>
                    <p className='city-weather-description'>{data.weather[0].description}</p>
                </div>
                <img alt='weather icon' className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
            </div>

            <div className='bottom'>
                <p className='city-temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='weather-details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CurrentWeatherCard;
