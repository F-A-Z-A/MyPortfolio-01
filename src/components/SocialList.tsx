import React from 'react';
import {Icon} from "./icons/Icon";
import styled from "styled-components";

export const SocialList = () => {
   return (
      <StyledSocialList>
         <SocialItem>
            <SocialLink>
               <Icon height={"35px"} width={"35px"} viewBox={"0 0 35px 35px"} iconId={"myGithub"}/>
            </SocialLink>
         </SocialItem>
         <SocialItem>
            <SocialLink>
               <Icon height={"35px"} width={"35px"} viewBox={"0 0 35px 35px"} iconId={"myLinkedin"}/>
            </SocialLink>
         </SocialItem>
         <SocialItem>
            <SocialLink>
               <Icon height={"35px"} width={"40px"} viewBox={"0 0 35px 40px"} iconId={"myTelegram"}/>
            </SocialLink>
         </SocialItem>
      </StyledSocialList>
   );
};

const StyledSocialList = styled.ul`
    display: flex;
    gap: 30px
`

const SocialItem = styled.li``

const SocialLink = styled.a`
    &:hover {
        color: #13ADC7;
    }
`