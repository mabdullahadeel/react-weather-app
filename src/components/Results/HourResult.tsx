import React from 'react';
import {HourDeatailsWrapper, HourDisplayer } from './styles/ForecastHourStyles';
import SmallLabel from '../Common/SmallLabel';
import { Hour } from './types/ResultsTypes';
import { WeatherIcon } from './styles/ForecastHourStyles';
import droplet from '../../assets/droplet.png';

interface Props {
    hourData: Hour[] | undefined;
}

function HourResult({hourData} : Props) {
    const getFormatedDate = (dateStr: string) => {
        return new Date(dateStr).toDateString()
    }
    return (
        <HourDeatailsWrapper>
            <HourDisplayer>
                <SmallLabel style={{ fontSize: "17px" }}>Time</SmallLabel>
                <SmallLabel style={{ fontSize: "17px" }}>Temperature</SmallLabel>
                <SmallLabel style={{ fontSize: "17px" }}>Weather</SmallLabel>
                <SmallLabel style={{ fontSize: "17px" }}>humidity</SmallLabel>
            </HourDisplayer>
            {hourData?.map((data) => (
                <HourDisplayer key={data.temp_c * Math.random() + Math.random()}>
                    <SmallLabel style={{ fontSize: "17px" }}>{getFormatedDate(data.time)}</SmallLabel>
                    <SmallLabel style={{ fontSize: "17px" }}>{data.temp_c}&#176;</SmallLabel>
                    <SmallLabel style={{ fontSize: "17px" }}>
                        <WeatherIcon src={data.condition.icon} />
                    </SmallLabel>
                    <SmallLabel style={{ fontSize: "17px" }}>
                        <img height="24px" src={droplet} alt="" />{data.humidity}
                    </SmallLabel>
                </HourDisplayer>
            ))}
        </HourDeatailsWrapper>
    )
}

export default HourResult;
