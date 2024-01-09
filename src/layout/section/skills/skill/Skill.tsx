import React from 'react';
import {Icon} from "../../../../components/icons/Icon";
import styled from "styled-components";

type SkillPropsType = {
   iconId: string
   skillTitle: string
}

export const Skill = (props: SkillPropsType) => {
   return (
      <StyledSkill>
         <Icon iconId={props.iconId}/>
         <SkillTitle>{props.skillTitle}</SkillTitle>
      </StyledSkill>
   );
};

const StyledSkill = styled.div`
    width: 10%;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 10px;
`

const SkillTitle = styled.h2`
`