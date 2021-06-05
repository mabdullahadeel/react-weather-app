import React from 'react';
import { Forecasts } from './types/ResultsTypes';
import { Forecast } from './styles/ResultStyles';
import TenDForecastsDay from './TenDForecastDay';
interface Props {
    daysData: Forecasts,
    setHourData: (id: string) => void
}


function TenDayForecast({ daysData, setHourData }: Props) {
    return (
        <Forecast>
            {daysData?.forecastday.map((day) => (
                <TenDForecastsDay
                    onClick={() => setHourData(day.date)}
                    key={Math.random() + day.date_epoch * Math.random()}
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
