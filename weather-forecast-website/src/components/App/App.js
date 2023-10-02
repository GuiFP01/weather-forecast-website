import { useState } from 'react';
import SearchCity from '../SearchCity/SearchCity';
import CurrentWeatherCard from '../CurrentWeatherCard/CurrentWeatherCard';
import ForecastCard from '../ForecastCard/ForecastCard';
import './App.scss';
import { currentWeatherApiUrl, forecastWeatherApiUrl, currentWeatherApiKey } from '../../api/apiCallWeather';




function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);


  const handleOnSearchChange = (searchCityData) => {
    const [lat, lon] = searchCityData.value.split(" ");

    const currentWeatherApiFetch = fetch(`${currentWeatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${currentWeatherApiKey}&units=metric`)

    const forecastWeatherApiFetch = fetch(`${currentWeatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${currentWeatherApiKey}&units=metric`)

    Promise.all([currentWeatherApiFetch, forecastWeatherApiFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({city: searchCityData.label, ...weatherResponse});
        setForecastWeather({city: searchCityData.label, ...forecastResponse});
      })
      .catch((err) => console.log(err));
  }



  return (
    <div className="App">

        <div>
          <SearchCity className="findCity" onSearchCityChange={ handleOnSearchChange }/>
        </div>
        {currentWeather && <CurrentWeatherCard data={currentWeather}/>}
        {forecastWeather && <ForecastCard data={forecastWeather}/>}
    </div>
  );
}

export default App;
