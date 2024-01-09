import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const StyledSkill = () => {
   return (
      <StyledSkills>
         <SectionTitle>My Tech Stack</SectionTitle>
         <FlexWrapper>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
         </FlexWrapper>
      </StyledSkills>
   );
};

const StyledSkills = styled.section``

