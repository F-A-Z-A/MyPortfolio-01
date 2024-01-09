import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialList} from "../../components/SocialList";

const items = ["Projects", "Technologies", "About me"]

export const Header = () => {
   return (
      <StyledHeader>
         <Logo/>
         <Menu menuItems={items}/>
         <SocialList/>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
    background-color: #80b488;
    display: flex;
    justify-content: space-between;
`