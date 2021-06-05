import React from 'react';
import { Forecast } from './styles/ResultStyles';
import ForecastHour from './ForecastHour';
import { Hour } from './types/ResultsTypes';

interface Props {
    hourforecastList: Hour[] | undefined
}

function ForeCastsToday({hourforecastList}:Props) {
    return(
        <Forecast>
            {hourforecastList?.map((hour) => (
                <ForecastHour 
                    condition={hour.condition}
                    humidity={hour.humidity}
                    temp_c={hour.temp_c}
                    time={hour.time}
                />
            ))}
        </Forecast>
    )
}

export default ForeCastsToday
