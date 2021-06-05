import styled from "styled-components";
import device from "../../../configs/styleConfigs/screen";
import { ResultFadeIn } from '../../NotFound/styles/NotFoundStyles'

export const ForecastWrapper = styled.div`
    flex-shrink: 0;
    flex-basis: 90px;
    padding: 10px;
    margin: 0 5px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);

    &:first-child {
        margin-left: 0;
    }
        &:last-child {
        margin-right: 0;
    }
        @media ${device.tablet} {
        flex-basis: 110px;
    }
        @media ${device.laptop} {
        flex-basis: 125px;
    }
        @media ${device.laptopL} {
        flex-basis: 140px;
    }
`;

export const WeatherIcon = styled.img`
    display: block;
    height: 50px;
    width: 50px;
    margin: 0 auto;
`;

export const HourDeatailsWrapper = styled.div`
    flex-basis: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 0;
    margin: 20px 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    align-self: flex-start;
    @media ${device.mobileL} {
        flex-basis: 50%;
    }
    animation: ${ResultFadeIn} 0.5s 1.4s forwards;
    `;
    
    export const HourDisplayer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.22);
    border: 1px solid #a3c4bd;
    border-radius: 10px;
    width:95%;
    margin: 7px 0px;
    padding: 10px;
    color: #fafafa;
`