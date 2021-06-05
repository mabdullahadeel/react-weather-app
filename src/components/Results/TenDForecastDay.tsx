import React from 'react';
import Text from '../Common/Text';
import SmallLabel from '../Common/SmallLabel';
import { WeatherIcon } from './styles/ForecastHourStyles';
import { TenDayForecastWrapper } from './styles/TenDayForecast'
import { Hour } from './types/ResultsTypes';
import droplet from '../../assets/droplet.png';


function TenDForecastDay({condition, humidity, temp_c, time}: Hour) {
    return (
        <TenDayForecastWrapper>
            <Text align="cener">
                {time}
            </Text>
            <WeatherIcon src={condition.icon} />
            <SmallLabel align="center" weight="400">
                {temp_c}&#176;
            </SmallLabel>
            <SmallLabel align="center" weight="400">
                <img height="24px" src={droplet} alt="" />{humidity}
            </SmallLabel>
        </TenDayForecastWrapper>
    )
}

export default TenDForecastDay
