import React from 'react';
import styled from "styled-components";
import photo from './../../assets/images/photo_Andrey.webp'
import {FlexWrapper} from "../../components/FlexWrapper";

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
               <span>
                  Перестраиваю свою жизни по философии: <q>Займись тем, что тебе нравится, и ты не будешь работать ни дня в своей жизни!</q>
               </span>
               <a href="#">Let`s Begin</a>
            </TextBlock>
            <Photo src={photo} alt="photo is undefined"/>
         </FlexWrapper>
      </StyledMain>
   );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #0F1624;
    color: #fff;
`

const Photo = styled.img`
    width: 380px;
    height: 450px;
    object-fit: cover;
`

const TextBlock = styled.div``

const MainTitle = styled.h1``

const Name = styled.h2``