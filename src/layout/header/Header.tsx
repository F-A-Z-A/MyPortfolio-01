import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {SocialList} from "../../components/SocialList";
import {Container} from "../../components/container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {myTheme} from "../../styles/Theme";
import {HeaderMenu} from "./headerMenu/headerMenu";
import {MobileMenu} from "./mobileMenu/mobileMenu";

const items = ["Projects", "Technologies", "About me"]

export const Header = () => {
   return (
      <StyledHeader>
         <Container>
            <FlexWrapper justify={"space-between"} align={"center"}>
               <Logo/>
               <HeaderMenu menuItems={items}/>
               <MobileMenu menuItems={items}/>
               <SocialList/>
            </FlexWrapper>
         </Container>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
    background-color: ${myTheme.colors.primaryBg};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;

    // SocialList {
    //     @media screen and (max-width: 900px) {
    //         display: none;
    //     }
    // }
`