import React from 'react';
import {Icon} from "../../../../components/icons/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
   iconId: string
   skillTitle: string
   width?: string
   height?: string
   viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
   return (
      <StyledSkill>
         <FlexWrapper direction={"column"} align={"center"} justify={"space-between"}>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            <SkillTitle>{props.skillTitle}</SkillTitle>
         </FlexWrapper>
      </StyledSkill>
   );
};

const StyledSkill = styled.div`
    width: 14%;
    min-width: 100px;
    //background-color: rgba(255, 255, 255, 0.5);
    margin: 10px;
`

const SkillTitle = styled.h2`
    font-size: 20px;
    text-transform: uppercase;
`