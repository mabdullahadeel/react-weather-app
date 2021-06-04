import styled from "styled-components/macro";
import device from "../../../configs/styleConfigs/screen";
import { ResultFadeIn } from '../../NotFound/styles/NotFoundStyles'


export const Results = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
    opacity: 0;
    visibility: hidden;
    position: relative;
    top: 20px;
    animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

export const LocationWrapper = styled.div`
    flex-basis: 100%;
`;

export const CurrentWeatherWrapper = styled.div`
    flex-basis: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto 1fr;
    margin: 20px 0;
    grid-gap: 30px;
    @media ${device.mobileL} {
    flex-basis: 50%;
    padding-right: 10px;
    }
    @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    padding-right: 20px;
    }
`;

export const WeatherIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    color: #ffffff;
    @media ${device.tablet} {
    font-size: 100px;
    justify-content: flex-end;
    }
    @media ${device.laptop} {
    font-size: 120px;
    }
    @media ${device.laptopL} {
    font-size: 140px;
    }
`;

export const TemperatureWrapper = styled.div``;

export const Temperature = styled.h3`
    display: block;
    font-size: 50px;
    font-weight: 400;
    color: #ffffff;
    @media ${device.tablet} {
    font-size: 70px;
    }
    @media ${device.laptop} {
    font-size: 90px;
    }
    @media ${device.laptopL} {
    font-size: 110px;
    }
`;

export const WeatherDetailsWrapper = styled.div`
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    margin: 20px 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    align-self: flex-start;
    @media ${device.mobileL} {
    flex-basis: 50%;
    }
`;

export const WeatherDetail = styled.div`
    flex-basis: calc(100% / 3);
    padding: 10px;
    @media ${device.laptop} {
        padding: 20px 10px;
    }
`;

export const ForecastWrapper = styled.div`
    flex-basis: 100%;
    margin: 20px 0;
    overflow: hidden;
`;

export const Forecast = styled.div`
    position: relative;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-color: lightgray #ffffff;
    scrollbar-width: thin;
    margin-top: 20px;
    padding-bottom: 20px;
    @media ${device.laptop} {
    order: 4;
    }

    &::-webkit-scrollbar {
        height: 7px;
        color: green;
    }
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #bdbdbd;
    }
`;
