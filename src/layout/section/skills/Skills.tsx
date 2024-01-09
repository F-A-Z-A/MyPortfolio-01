import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
   return (
      <StyledSkills>
         <SectionTitle>My Tech Stack</SectionTitle>
         <FlexWrapper wrap={"wrap"} justify={"space-around"}>
            <Skill iconId={"htmlIcon"} skillTitle={"HTML"}/>
            <Skill iconId={"cssIcon"} skillTitle={"CSS"}/>
            <Skill iconId={"jsIcon"} skillTitle={"JS"}/>
            <Skill iconId={"reactIcon"} skillTitle={"REACT"}/>
            <Skill iconId={"githubIcon"} skillTitle={"GitHub"}/>
            <Skill iconId={"sassIcon"} skillTitle={"SASS"}/>
         </FlexWrapper>
      </StyledSkills>
   );
};

const StyledSkills = styled.section`
    background-color: #7c7ec0;
    min-height: 300px;
`

