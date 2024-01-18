import styled from "styled-components";
import {myTheme} from "../styles/Theme";

export const Link = styled.a`
    font-size: 24px;
    font-weight: 500;
    position: relative;
    z-index: 0;

    &:hover {
        &::before {
            height: 7px;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        background: ${myTheme.colors.accent};

        position: absolute;
        bottom: -5px;
        left: -10px;
        right: -10px;
        z-index: -1;
    }
`