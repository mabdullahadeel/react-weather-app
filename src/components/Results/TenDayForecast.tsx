import React from 'react';
import { Forecasts } from './types/ResultsTypes';
import { Forecast } from './styles/ResultStyles';
import TenDForecastsDay from './TenDForecastDay';
interface Props {
    daysData: Forecasts
}


function TenDayForecast({ daysData }: Props) {
    return (
        <Forecast>
            {daysData?.forecastday.map((day) => (
                <TenDForecastsDay
                    condition={day.day.condition}
                    humidity={day.day.avghumidity}
                    temp_c={day.day.avgtemp_c}
                    time={day.date}
                />
            ))}
        </Forecast>
    )
}

export default TenDayForecast
