import React, { useState } from 'react'
import { geoApiOptions, geoApiUrl } from '../../api/apiCallCities'
import "./SearchCity.scss"
import { AsyncPaginate } from 'react-select-async-paginate'

function SearchCity({className, onSearchCityChange}) {

    const [searchForCity, setsearchForCity] = useState(null)

    const handleOnChange = (searchCityData) => {
        setsearchForCity(searchCityData);
        onSearchCityChange(searchCityData);
    }

    const showCities = (inputValue) => {
        return fetch(`${geoApiUrl}/cities?limit=5&minPopulation=300000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
            const options = response.data.map(city => ({
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.country}`,
            }));

            return { options };
            })
            .catch(err => {
            console.error(err);
            return { options: [] };
            });
    };



    return (
        <div className={className}>
            <AsyncPaginate
                placeholder="Which city?"
                debounceTimeout={600}
                value={searchForCity}
                onChange={handleOnChange}
                loadOptions={showCities}
            />
        </div>
    )
}

export default SearchCity
