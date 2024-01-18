import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/container";

export const Skills = () => {
   return (
      <StyledSkills>
         <Container>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-around"} rowGap={"50px"}>
               <Skill iconId={"htmlIcon"} skillTitle={"HTML"} width="120" height="120" viewBox="0 0 120 120"/>
               <Skill iconId={"cssIcon"} skillTitle={"CSS"} width="120" height="119" viewBox="0 0 120 119"/>
               <Skill iconId={"jsIcon"} skillTitle={"JavaScript"} width="120" height="120" viewBox="0 0 120 120"/>
               <Skill iconId={"reactIcon"} skillTitle={"REACT"} width="113" height="101" viewBox="0 0 113 101"/>
               <Skill iconId={"vectorIcon"} skillTitle={"Vector"} width="105" height="100" viewBox="0 0 105 100"/>
               <Skill iconId={"bootstrapIcon"} skillTitle={"Bootstrap"} width="88" height="87" viewBox="0 0 88 87"/>
               <Skill iconId={"tailwindIcon"} skillTitle={"Tailwind"} width="131" height="131" viewBox="0 20 131 131"/>
               <Skill iconId={"sassIcon"} skillTitle={"SASS"} width="117" height="87" viewBox="0 0 117 87"/>
               <Skill iconId={"gitIcon"} skillTitle={"GIT"} width="105" height="105" viewBox="0 0 105 105"/>
               <Skill iconId={"greensockIcon"} skillTitle={"GreenSock"} width="120" height="120" viewBox="0 0 120 120"/>
               <Skill iconId={"vscodeIcon"} skillTitle={"VSCode"} width="112" height="112" viewBox="0 0 112 112"/>
               <Skill iconId={"githubIcon"} skillTitle={"GitHub"} width="88" height="88" viewBox="0 0 88 88"/>
            </FlexWrapper>
         </Container>
      </StyledSkills>
   );
};

const StyledSkills = styled.section`

`

