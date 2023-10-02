import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./ForecastCard.scss";

const weekDaysList = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

function forecastCard({ data }) {
    const eachWeekDay = new Date().getDay();
    const eachDayForecast = weekDaysList
    .slice(eachWeekDay, weekDaysList.length)
    .concat(weekDaysList.slice(0, eachWeekDay));

return (
    <>
        <label className="title">Daily Forecast</label>
        <Accordion allowZeroExpanded>
        {data.list.slice(0, 5).map((item, index) => (
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <div className="daily-item">
                        <img
                        src={`icons/${item.weather[0].icon}.png`}
                        alt="weather icon"
                        className="weather-small-icon"
                        />
                        <label className="day">{eachDayForecast[index]}</label>
                        <label className="description">
                        {item.weather[0].description}
                        </label>
                        <label className="minMaxTemperature">
                        {Math.round(item.main.temp_min)}°C /
                        {Math.round(item.main.temp_max)}°C
                        </label>
                    </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="daily-details-grid">
                        <div className="daily-details-grid-item">
                            <label>Pressure:</label>
                            <label>{item.main.pressure} hPa</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label>Humidity:</label>
                            <label>{item.main.humidity}%</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label>Clouds:</label>
                            <label>{item.clouds.all}%</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label>Wind speed:</label>
                            <label>{item.wind.speed} m/s</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label>Sea level:</label>
                            <label>{item.main.sea_level}m</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label>Feels like:</label>
                            <label>{Math.round(item.main.feels_like)}°C</label>
                        </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        ))}
        </Accordion>
    </>
    );
}

export default forecastCard;
