import React from 'react';
import Text from '../Common/Text';
import SmallLabel from '../Common/SmallLabel';
import { ForecastWrapper, WeatherIcon } from './styles/ForecastHourStyles';
import { Hour } from './types/ResultsTypes';

function ForecastHour({condition, humidity, temp_c, time}: Hour) {
    return (
        <ForecastWrapper>
            <Text align="cener">
                {time.split(" ")[1]}
            </Text>
            <WeatherIcon src={condition.icon} />
            <SmallLabel align="center" weight="400">
                {temp_c}&#176;
            </SmallLabel>
            <SmallLabel align="center" weight="400">
                {humidity}
            </SmallLabel>
        </ForecastWrapper>
    )
}

export default ForecastHour
