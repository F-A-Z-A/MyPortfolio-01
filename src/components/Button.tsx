import styled from "styled-components";
import {myTheme} from "../styles/Theme";

export const Button = styled.button`
    color: ${myTheme.colors.font};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    width: 240px;
    height: 60px;
    border-radius: 83px;
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
`