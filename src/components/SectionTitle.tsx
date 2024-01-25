import styled from "styled-components";
import {myTheme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
    ${font({family: "'Poppins', sans-serif", weight: 600, Fmax: 46, Fmin: 40})}
    text-align: center;
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

        @media ${myTheme.media.mobile} {
            bottom: -24px;
        }
    }
`