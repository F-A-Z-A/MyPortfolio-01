import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialList} from "../../components/SocialList";

export const Footer = () => {
   return (
      <StyledFooter>
         <FlexWrapper direction={"column"} align={"center"}>
            <Name>Andrey</Name>
            <SocialList/>
            <Copyright>© 2024 Andrey Urazaev, All Rights Not Reserved.</Copyright>
         </FlexWrapper>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
    background-color: #529f9d;
    min-height: 15vh;
`

const Name = styled.span``

const Copyright = styled.small``