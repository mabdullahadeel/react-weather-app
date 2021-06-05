import styled from "styled-components";
import device from "../../../configs/styleConfigs/screen";

export const TenDayForecastWrapper = styled.div`
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

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }
`;