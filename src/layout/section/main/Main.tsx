import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo_Andrey.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/container";
import {Button} from "../../../components/Button";
import {myTheme} from "../../../styles/Theme";

export const Main = () => {
   return (
      <StyledMain>
         <Container>
            <FlexWrapper align={"center"} justify={"space-between"}>
               <TextBlock>
                  <Name>
                     I am <span>Andrey Urazaev</span>
                  </Name>
                  <MainTitle>
                     Frontend Developer
                  </MainTitle>
                  <AboutMe>
                     <q>Не забывай о жизни, которую ты себе обещал!</q>
                  </AboutMe>
                  <Button>Let`s Begin</Button>
               </TextBlock>
               <Photo src={photo} alt="photo is undefined"/>
            </FlexWrapper>
         </Container>
      </StyledMain>
   );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #727cb7;
    display: flex;
`
const TextBlock = styled.div`
    text-align: start;
`

const Name = styled.h2`
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 15px;

    span {
        position: relative;
        z-index: 0;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background: ${myTheme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
    margin-bottom: 15px;
`

const AboutMe = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 60px;
`

const Photo = styled.img`
    width: 380px;
    height: 450px;
    object-fit: cover;

    border-radius: 50px 0px;
    border: 5px solid #8643DC;
`