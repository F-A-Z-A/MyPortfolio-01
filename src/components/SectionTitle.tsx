import styled from "styled-components";
import {myTheme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 46px;
    font-weight: 600;
    margin-bottom: 100px;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 100px;
        height: 1px;
        background: ${myTheme.colors.accent};

        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
    }
`