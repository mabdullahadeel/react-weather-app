import React, {useState, useEffect} from 'react';
import {
    Results,
    LocationWrapper,
    CurrentWeatherWrapper,
    WeatherIcon,
    TemperatureWrapper,
    Temperature,
    ForecastWrapper,
    WeatherDetail,
    WeatherDetailsWrapper
} from './styles/ResultStyles';
import BigLabel from '../Common/BigLabel'
import SmallLabel from '../Common/SmallLabel';
import Text from '../Common/Text';
import ForeCastsToday from './ForeCastsToday';
import { Props, ForeCast } from './types/ResultsTypes';
import MediumLabel from '../Common/MediumLabel';

function Result({location, forcasts}: Props) {

    const [currentForeCast, setCurrentForecast] = useState<ForeCast | null>(null);

    useEffect(() => {        
        const currentDay = forcasts.forecastday.filter((day) => {
            return day.date === location.localtime.split(" ")[0]
        })
        setCurrentForecast(currentDay[0])
    }, [forcasts])

    const getFormatedDate = (dateStr: string) => {
        return new Date(dateStr).toDateString()
    }

    return (
        <Results>
            <LocationWrapper>
                <BigLabel>
                    {location.name || "N/A"}, <SmallLabel>{location.country || "N/A"}</SmallLabel>
                </BigLabel>
                <SmallLabel weight="400">{getFormatedDate(location.localtime) || "N/A"}</SmallLabel>
            </LocationWrapper>
            <CurrentWeatherWrapper>
                <WeatherIcon>
                    <img src={currentForeCast?.day.condition.icon || ""} alt="icon" />
                </WeatherIcon>
                <TemperatureWrapper>
                    <Temperature>{Math.floor(currentForeCast?.day.avgtemp_c || 30)}&#176;</Temperature>
                    <SmallLabel weight="400">{currentForeCast?.day.condition.text || "N/A"}</SmallLabel>
                </TemperatureWrapper>
            </CurrentWeatherWrapper>
            <WeatherDetailsWrapper>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {currentForeCast?.day.maxtemp_c}&#176;
                    </SmallLabel>
                    <Text align="center">Highest</Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {currentForeCast?.day.avgvis_km || "N/A"} kph
                    </SmallLabel>
                    <Text align="center">Wind</Text>
                </WeatherDetail>
                <WeatherDetail>
                <SmallLabel align="center" weight="400">
                    {currentForeCast?.astro.sunrise || "N/A"}
                </SmallLabel>
                <Text align="center">Sunrise</Text>
                </WeatherDetail>
                <WeatherDetail>
                <SmallLabel align="center" weight="400">
                    {currentForeCast?.day.maxtemp_c}&#176;
                </SmallLabel>
                <Text align="center">Low</Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {currentForeCast?.day.daily_chance_of_rain || "N/A"} %
                    </SmallLabel>
                    <Text align="center">Rain</Text>
                </WeatherDetail>
                <WeatherDetail>
                <SmallLabel align="center" weight="400">
                    {currentForeCast?.astro.sunset || "N/A"}
                </SmallLabel>
                <Text align="center">Sunset</Text>
                </WeatherDetail>
            </WeatherDetailsWrapper>
            <ForecastWrapper>
                <MediumLabel weight="400">Today's Forecast</MediumLabel>
                <ForeCastsToday hourforecastList={currentForeCast?.hour}/>
            </ForecastWrapper>
            <ForecastWrapper>
                <MediumLabel weight="400">10 Day Forecast</MediumLabel>
                <ForeCastsToday hourforecastList={currentForeCast?.hour}/>
            </ForecastWrapper>
        </Results>
    )
}

export default Result;
