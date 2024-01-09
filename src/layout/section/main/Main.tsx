import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo_Andrey.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
   return (
      <StyledMain>
         <FlexWrapper align={"center"} justify={"space-around"}>
            <TextBlock>
               <Name>
                  I am Andrey Urazaev
               </Name>
               <MainTitle>
                  Frontend Developer
               </MainTitle>
               <AboutMe>
                  Здесь я позже добавлю какой-нибудь небольшой текст описание о себе
               </AboutMe>
               <a href="#">Let`s Begin</a>
            </TextBlock>
            <Photo src={photo} alt="photo is undefined"/>
         </FlexWrapper>
      </StyledMain>
   );
};

const StyledMain = styled.div`
    min-height: 450px;
    background-color: #727cb7;
`
const TextBlock = styled.div``

const Name = styled.h2``

const MainTitle = styled.h1``

const AboutMe = styled.p``

const Photo = styled.img`
    width: 380px;
    height: 450px;
    object-fit: cover;
`