import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialList} from "../../components/SocialList";
import {myTheme} from "../../styles/Theme";

export const Footer = () => {
   return (
      <StyledFooter>
         <FlexWrapper direction={"column"} align={"center"}>
            <SocialList/>
            <Copyright>© 2024 Andrey Urazaev, All Rights Not Reserved.</Copyright>
         </FlexWrapper>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
    background-color: ${myTheme.colors.primaryBg};
    padding: 40px 0;
`

const Copyright = styled.small`
    margin-top: 20px;
    opacity: 0.5;
    font-size: 12px;
    font-weight: 400;
`